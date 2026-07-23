"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ListFormShell from "./ListFormShell";
import ListFormFields from "./ListFormFields";
import UserSearchInput from "./UserSearchInput";

export default function CreateList() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("Personal");
    const [dueDate, setDueDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [members, setMembers] = useState<{ _id: string; username: string }[]>(
        []
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/pad/list/create`,
                {
                    method: "POST",
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
                                ? members.map((m) => m.username)
                                : undefined,
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
            setLoading(false);
        }
    };

    const handleCancel = () => {
        router.push("/home");
    };

    return (
        <ListFormShell title="Create list" error={error}>
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

                <div className="flex gap-2.5">
                    <button
                        disabled={loading}
                        className="rounded-md bg-emerald px-5 py-2.5 font-body font-semibold text-canvas transition-colors hover:bg-emerald-dark disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Creating…" : "Create list"}
                    </button>

                    <button
                        type="button"
                        onClick={handleCancel}
                        className="rounded-md border border-line px-5 py-2.5 font-body font-semibold text-ink-dim transition-colors hover:text-ink"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </ListFormShell>
    );
}
