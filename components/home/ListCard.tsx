import { List } from "@/types/list/list.types";

export default function ListCard({
    list,
    onDelete,
    onUpdate,
}: {
    list: List;
    onDelete: (listId: string) => void;
    onUpdate: (listId: string) => void;
}) {
    return (
        <div className="relative overflow-hidden rounded-md border border-line bg-surface-soft p-5">
            <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 bg-emerald"
            />

            <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-ink">
                    {list.title}
                </h3>
                <span className="shrink-0 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-ink-dim">
                    {list.type}
                </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-body text-sm text-ink-dim">
                <span>{list.members?.length ?? 0} members</span>
                <span>
                    {list.dueDate
                        ? `Due ${new Date(list.dueDate).toLocaleDateString()}`
                        : "No due date"}
                </span>
            </div>

            <div className="mt-5 flex gap-2.5">
                <button
                    onClick={() => onUpdate(list._id)}
                    className="rounded-md bg-emerald px-4 py-2 font-body text-sm font-semibold text-canvas transition-colors hover:bg-emerald-dark"
                >
                    Update
                </button>
                <button
                    onClick={() => onDelete(list._id)}
                    className="rounded-md border border-red-900/60 px-4 py-2 font-body text-sm font-semibold text-red-400 transition-colors hover:border-red-800 hover:bg-red-950/40"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
