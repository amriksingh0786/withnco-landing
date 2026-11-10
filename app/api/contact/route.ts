import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  CONTACT_BUDGET_OPTIONS,
  CONTACT_SERVICE_OPTIONS,
  SCOPE_SCREEN,
} from "@/lib/offers";

/** Maximum accepted length per field, in characters (after trimming). */
const MAX_LENGTH = {
  name: 200,
  email: 320,
  company: 200,
  service: 100,
  message: 5000,
  budget: 100,
  scope: 50,
  source: 300,
  /** Honeypot: hidden from people, so any value means an automated submission. */
  website: 200,
} as const;

type Field = keyof typeof MAX_LENGTH;

const REQUIRED: readonly Field[] = ["name", "email", "service", "message", "scope"];

/**
 * Deliberately strict: besides whitespace and address punctuation, it rejects
 * ? & = % # / so an address can never carry mailto or URL parameters.
 */
const EMAIL_PATTERN =
  /^[^\s@<>()[\]\\,;:"?&=%#/]+@[^\s@<>()[\]\\,;:"?&=%#/]+\.[^\s@<>()[\]\\,;:"?&=%#/]+$/;

const SCOPE_FLAGGED = new Set<string>(["yes", "unsure"]);

const labelFor = (
  options: readonly { value: string; label: string }[],
  value: string
) => options.find((o) => o.value === value)?.label;

/** Escape a user-supplied value for safe interpolation into HTML text or attributes. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Percent-encode an address for a mailto: href. Each side of the "@" goes through
 * encodeURIComponent, so nothing in the address can add mailto parameters
 * (?cc=, &bcc=...), while the "@" separator stays literal as RFC 6068 expects.
 */
function mailtoHref(address: string): string {
  return `mailto:${address.split("@").map(encodeURIComponent).join("@")}`;
}

/** Collapse CR/LF (and other line breaks) so a value is safe in a mail header. */
function singleLine(value: string): string {
  return value.replace(/[\r\n\u2028\u2029]+/g, " ").trim();
}

const badRequest = (error: string) =>
  NextResponse.json({ error }, { status: 400 });

const serverError = () =>
  NextResponse.json({ error: "Failed to send message" }, { status: 500 });

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid request body");
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return badRequest("Invalid request body");
  }

  const raw = body as Record<string, unknown>;
  const values = {} as Record<Field, string>;

  for (const key of Object.keys(MAX_LENGTH) as Field[]) {
    const value = raw[key];
    if (value === undefined || value === null) {
      values[key] = "";
      continue;
    }
    if (typeof value !== "string") {
      return badRequest("Invalid field value");
    }
    const trimmed = value.trim();
    if (trimmed.length > MAX_LENGTH[key]) {
      return badRequest("A field is too long");
    }
    values[key] = trimmed;
  }

  const { name, email, company, service, message, budget, scope, source, website } =
    values;

  // Honeypot filled in: answer as if it worked so the bot learns nothing, send nothing.
  if (website !== "") {
    return NextResponse.json({ success: true });
  }

  if (REQUIRED.some((key) => values[key] === "")) {
    return badRequest("Missing required fields");
  }

  if (!EMAIL_PATTERN.test(email)) {
    return badRequest("Invalid email format");
  }

  const serviceLabel = labelFor(CONTACT_SERVICE_OPTIONS, service);
  if (!serviceLabel) {
    return badRequest("Invalid service");
  }

  const budgetLabel = budget ? labelFor(CONTACT_BUDGET_OPTIONS, budget) : undefined;
  if (budget && !budgetLabel) {
    return badRequest("Invalid budget");
  }

  const scopeLabel = labelFor(SCOPE_SCREEN.options, scope);
  if (!scopeLabel) {
    return badRequest("Invalid scope answer");
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Contact form: missing GMAIL_USER or GMAIL_APP_PASSWORD");
    return serverError();
  }

  const scopeFlagged = SCOPE_FLAGGED.has(scope);
  const notProvided = "Not provided";

  const row = (label: string, valueHtml: string) => `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px; vertical-align: top;">${label}:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${valueHtml}</td>
            </tr>`;

  const scopeNote = scopeFlagged
    ? `
          <div style="margin-top: 20px; padding: 12px 15px; background: #FDF1EC; border-left: 4px solid #C67B5C; border-radius: 4px; color: #1A1A1A; font-weight: bold;">
            Scope screen: review before replying
          </div>`
    : "";

  const html = `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A1A; border-bottom: 2px solid #C67B5C; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          ${scopeNote}

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            ${row("Name", escapeHtml(name))}
            ${row(
              "Email",
              `<a href="${escapeHtml(mailtoHref(email))}" style="color: #C67B5C;">${escapeHtml(email)}</a>`
            )}
            ${row("Company", escapeHtml(company || notProvided))}
            ${row("Service", escapeHtml(serviceLabel))}
            ${row("Budget", escapeHtml(budgetLabel ?? notProvided))}
            ${row(
              "Scope",
              `${escapeHtml(SCOPE_SCREEN.question)}<br /><strong>${escapeHtml(scopeLabel)}</strong>`
            )}
            ${row("Source", escapeHtml(source || notProvided))}
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #1A1A1A; margin-bottom: 10px;">Message:</h3>
            <div style="background: #F5F3EF; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>

          <p style="margin-top: 30px; color: #A39E93; font-size: 12px;">
            Sent from withnco.studio contact form at ${escapeHtml(new Date().toLocaleString())}
          </p>
        </div>
      `;

  const text = [
    "New Contact Form Submission",
    scopeFlagged ? "\n*** Scope screen: review before replying ***\n" : "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || notProvided}`,
    `Service: ${serviceLabel}`,
    `Budget: ${budgetLabel ?? notProvided}`,
    `Scope: ${SCOPE_SCREEN.question} ${scopeLabel}`,
    `Source: ${source || notProvided}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const subjectPrefix = scopeFlagged ? "[Scope review] " : "";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `withnco Contact Form <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: { name: singleLine(name), address: email },
      subject: singleLine(`${subjectPrefix}New inquiry from ${name} - ${serviceLabel}`),
      html,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return serverError();
  }
}
