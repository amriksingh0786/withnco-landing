"use client";

import { cn } from "@/lib/utils";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  /** Shared `name` for every radio; also used to build element ids. */
  name: string;
  /** Visible question, rendered as the fieldset legend. */
  legend: string;
  options: readonly RadioOption[];
  /** Controlled value. Pair with `onChange`. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  hint?: string;
  error?: string;
  className?: string;
}

export function RadioGroup({
  name,
  legend,
  options,
  value,
  defaultValue,
  onChange,
  required,
  disabled,
  hint,
  error,
  className,
}: RadioGroupProps) {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const isControlled = value !== undefined;

  return (
    <fieldset
      className={cn("w-full min-w-0", className)}
      aria-describedby={describedBy}
      disabled={disabled}
    >
      <legend className="block text-small font-medium text-off-black dark:text-warm-white mb-2">
        {legend}
      </legend>

      {hint && (
        <p id={hintId} className="text-small text-stone mb-3">
          {hint}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={cn(
                "flex items-center gap-3 min-h-14 px-4 py-3 text-body-sm cursor-pointer rounded",
                "bg-warm-white dark:bg-dark-surface text-off-black dark:text-warm-white",
                "border border-stone/30 dark:border-stone/40",
                "transition-colors duration-200",
                "hover:border-stone/60 dark:hover:border-stone/60",
                "has-[:checked]:border-terracotta has-[:checked]:ring-1 has-[:checked]:ring-terracotta",
                "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-terracotta",
                "has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed",
                error && "border-red-500 dark:border-red-500"
              )}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                required={required}
                className="w-4 h-4 flex-shrink-0 accent-terracotta cursor-pointer focus:outline-none"
                {...(isControlled
                  ? {
                      checked: value === option.value,
                      onChange: () => onChange?.(option.value),
                    }
                  : {
                      defaultChecked: defaultValue === option.value,
                      onChange: onChange
                        ? () => onChange(option.value)
                        : undefined,
                    })}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <p id={errorId} className="mt-1 text-small text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </fieldset>
  );
}
