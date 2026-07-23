"use client";

import { useEffect, useState } from "react";

type UserOption = {
    _id: string;
    username: string;
};

interface Props {
    selected: UserOption[];
    onChange: (users: UserOption[]) => void;
}

export default function UserSearchInput({ selected, onChange }: Props) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<UserOption[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query.trim()) return;

        const controller = new AbortController();

        const timeoutId = setTimeout(async () => {
            setLoading(true);

            try {
                const response = await fetch(
                    `${
                        process.env.NEXT_PUBLIC_API_URL
                    }/identity/user/search?query=${encodeURIComponent(query)}`,
                    {
                        credentials: "include",
                        signal: controller.signal,
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message);
                }

                setResults(
                    data.data.filter(
                        (user: UserOption) =>
                            !selected.some((s) => s._id === user._id)
                    )
                );
            } catch (err) {
                if (err instanceof DOMException && err.name === "AbortError") {
                    return;
                }

                console.error(err);
            } finally {
                setLoading(false);
            }
        }, 300);

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, [query, selected]);

    const addUser = (user: UserOption) => {
        if (selected.some((u) => u._id === user._id)) {
            return;
        }

        onChange([...selected, user]);

        setQuery("");
        setResults([]);
    };

    const removeUser = (id: string) => {
        onChange(selected.filter((u) => u._id !== id));
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="font-body text-sm text-ink-dim">
                Add members
            </label>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by username..."
                className="rounded-md border border-line px-3 py-2 font-body"
            />

            {loading && <p className="text-sm text-ink-dim">Searching...</p>}

            {!loading && query.trim() && results.length > 0 && (
                <ul className="overflow-hidden rounded-md border border-line">
                    {results.map((user) => (
                        <li
                            key={user._id}
                            onClick={() => addUser(user)}
                            className="cursor-pointer px-3 py-2 transition-colors hover:bg-line/40"
                        >
                            {user.username}
                        </li>
                    ))}
                </ul>
            )}

            {!loading && query.trim() && results.length === 0 && (
                <p className="px-1 text-sm text-ink-dim">No users found.</p>
            )}

            {selected.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {selected.map((user) => (
                        <span
                            key={user._id}
                            className="flex items-center gap-2 rounded-full bg-line/40 px-3 py-1 text-sm"
                        >
                            {user.username}

                            <button
                                type="button"
                                onClick={() => removeUser(user._id)}
                                className="font-semibold text-ink-dim transition-colors hover:text-red-500"
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
