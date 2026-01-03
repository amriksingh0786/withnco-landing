import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, service, message, budget, source } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing email configuration environment variables");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create transporter for each request to ensure fresh config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email via Gmail SMTP
    await transporter.sendMail({
      from: `withnco Contact Form <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New inquiry from ${name} - ${service}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A1A; border-bottom: 2px solid #C67B5C; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #C67B5C;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${budget || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Source:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${source || "Not provided"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #1A1A1A; margin-bottom: 10px;">Message:</h3>
            <div style="background: #F5F3EF; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          </div>

          <p style="margin-top: 30px; color: #A39E93; font-size: 12px;">
            Sent from withnco.studio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to send message", details: errorMessage },
      { status: 500 }
    );
  }
}
