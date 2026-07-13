"use client";

import { GetListsResponse, List } from "@/types/list/list.types";
import { useEffect, useState } from "react";

export default function View() {
    const [lists, setLists] = useState<List[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/pad/list/get`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                const result: GetListsResponse = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed to fetch lists.");
                }

                setLists(result.data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchLists();
    }, []);

    return (
        <div className="flex h-full w-full gap-10">
            <div className="w-4/5 border border-gray-400 p-5">
                <h2 className="mb-4 text-xl font-bold">My Lists</h2>

                {loading && <p>Loading...</p>}

                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && lists.length === 0 && (
                    <p>No lists found.</p>
                )}

                {!loading &&
                    !error &&
                    lists.map((list) => (
                        <div key={list._id} className="mb-4 rounded border p-4">
                            <h3 className="text-lg font-semibold">
                                {list.title}
                            </h3>

                            <p>Type: {list.type}</p>

                            <p>Members: {list.members?.length ?? 0}</p>

                            <p>
                                Due Date:{" "}
                                {list.dueDate
                                    ? new Date(
                                          list.dueDate
                                      ).toLocaleDateString()
                                    : "No due date"}
                            </p>
                        </div>
                    ))}
            </div>

            <div className="w-1/5 border border-gray-400 p-5">
                <h2 className="font-bold">Sidebar</h2>
            </div>
        </div>
    );
}
