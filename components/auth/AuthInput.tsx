import type { ChangeEventHandler } from "react";

type AuthInputProps = {
    id: string;
    label: string;
    type?: string;
    autoComplete?: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function AuthInput({
    id,
    label,
    type = "text",
    autoComplete,
    placeholder,
    required = true,
    value,
    onChange,
}: AuthInputProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="font-body text-sm font-medium text-ink/85"
            >
                {label}
            </label>

            <input
                id={id}
                name={id}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="rounded-md border border-line bg-surface-soft px-3.5 py-2.5 font-body text-sm text-ink placeholder:text-ink-dim/70 focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
            />
        </div>
    );
}
