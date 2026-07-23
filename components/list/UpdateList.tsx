"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ListFormShell from "./ListFormShell";
import ListFormFields from "./ListFormFields";
import UserSearchInput from "./UserSearchInput";

export default function UpdateList() {
    const { listId } = useParams<{ listId: string }>();

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("Personal");
    const [dueDate, setDueDate] = useState("");

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const [members, setMembers] = useState<{ _id: string; username: string }[]>(
        []
    );

    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/pad/list/get/${listId}`,
                    {
                        credentials: "include",
                    }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message);
                }

                const list = result.data;

                setTitle(list.title);
                setType(list.type);
                setDueDate(list.dueDate ? list.dueDate.substring(0, 10) : "");
                setMembers(list.members ?? []);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchList();
    }, [listId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSaving(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/pad/list/update/${listId}`,
                {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        type,
                        dueDate: dueDate || undefined,
                        members:
                            type === "Group"
                                ? members.map((member) => member.username)
                                : [],
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            router.push("/home");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <main className="mx-auto max-w-xl px-6 py-16">
                <p className="font-body text-sm text-ink-dim">Loading…</p>
            </main>
        );
    }

    return (
        <ListFormShell title="Update list" error={error}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <ListFormFields
                    title={title}
                    type={type}
                    dueDate={dueDate}
                    onTitleChange={setTitle}
                    onTypeChange={setType}
                    onDueDateChange={setDueDate}
                />

                {type === "Group" && (
                    <UserSearchInput selected={members} onChange={setMembers} />
                )}

                <button
                    disabled={saving}
                    className="w-fit rounded-md bg-emerald px-5 py-2.5 font-body font-semibold text-canvas transition-colors hover:bg-emerald-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {saving ? "Saving…" : "Update list"}
                </button>
            </form>
        </ListFormShell>
    );
}
