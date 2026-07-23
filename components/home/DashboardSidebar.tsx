"use client";

import { useEffect, useState } from "react";

interface SharedList {
    _id: string;
    title: string;
    userId: {
        username: string;
    };
}

export default function DashboardSidebar() {
    const [lists, setLists] = useState<SharedList[]>([]);

    useEffect(() => {
        const fetchLists = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/pad/list/shared`,
                {
                    credentials: "include",
                }
            );

            const result = await response.json();

            if (response.ok) {
                setLists(result.data);
            }
        };

        fetchLists();
    }, []);

    return (
        <aside className="w-1/5 rounded-md border border-line bg-surface p-5">
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wide text-ink-dim">
                Shared With Me
            </h2>

            <div className="space-y-2">
                {lists.map((list) => (
                    <div
                        key={list._id}
                        className="rounded-md border border-line p-3"
                    >
                        <p className="font-medium">{list.title}</p>

                        <p className="text-xs text-ink-dim">
                            Shared by {list.userId.username}
                        </p>
                    </div>
                ))}
            </div>
        </aside>
    );
}
