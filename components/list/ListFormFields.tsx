export default function ListFormFields({
    title,
    type,
    dueDate,
    onTitleChange,
    onTypeChange,
    onDueDateChange,
}: {
    title: string;
    type: string;
    dueDate: string;
    onTitleChange: (value: string) => void;
    onTypeChange: (value: string) => void;
    onDueDateChange: (value: string) => void;
}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor="title"
                    className="font-body text-sm font-medium text-ink/85"
                >
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    placeholder="List title"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                    required
                    className="rounded-md border border-line bg-surface-soft px-3.5 py-2.5 font-body text-sm text-ink placeholder:text-ink-dim/70 focus:border-emerald"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor="type"
                    className="font-body text-sm font-medium text-ink/85"
                >
                    Type
                </label>
                <div className="relative">
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => onTypeChange(e.target.value)}
                        className="w-full appearance-none rounded-md border border-line bg-surface-soft px-3.5 py-2.5 font-body text-sm text-ink focus:border-emerald"
                    >
                        <option value="Personal">Personal</option>
                        <option value="Group">Group</option>
                    </select>
                    <span
                        aria-hidden
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 font-body text-xs text-ink-dim"
                    >
                        ▾
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor="dueDate"
                    className="font-body text-sm font-medium text-ink/85"
                >
                    Due date
                </label>
                <input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => onDueDateChange(e.target.value)}
                    className="w-full rounded-md border border-line bg-surface-soft px-3.5 py-2.5 font-body text-sm text-ink focus:border-emerald scheme-dark"
                />
            </div>
        </div>
    );
}
