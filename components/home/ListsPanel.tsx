import { List } from "@/types/list/list.types";
import ListCard from "./ListCard";

export default function ListsPanel({
    lists,
    loading,
    error,
    onDelete,
    onUpdate,
}: {
    lists: List[];
    loading: boolean;
    error: string;
    onDelete: (listId: string) => void;
    onUpdate: (listId: string) => void;
}) {
    return (
        <div className="w-4/5 rounded-md border border-line bg-surface p-6">
            <h2 className="mb-5 font-display text-xl font-bold text-ink">
                My Lists
            </h2>

            {loading && (
                <p className="font-body text-sm text-ink-dim">Loading…</p>
            )}

            {error && (
                <p className="rounded-md border border-red-900/60 bg-red-950/30 px-4 py-3 font-body text-sm text-red-400">
                    {error}
                </p>
            )}

            {!loading && !error && lists.length === 0 && (
                <p className="font-body text-sm text-ink-dim">
                    No lists yet — start a pad to see it here.
                </p>
            )}

            {!loading && !error && lists.length > 0 && (
                <div className="flex flex-col gap-4">
                    {lists.map((list) => (
                        <ListCard
                            key={list._id}
                            list={list}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
