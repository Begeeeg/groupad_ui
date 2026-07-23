"use client";

import { GetListsResponse, List } from "@/types/list/list.types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ListsPanel from "./ListsPanel";
import DashboardSidebar from "./DashboardSidebar";

export default function View() {
    const [lists, setLists] = useState<List[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter();

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

    const handleDelete = async (listId: string) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/pad/list/delete/${listId}`,
                {
                    method: "DELETE",
                    credentials: "include",
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to delete list.");
            }

            setLists((prev) => prev.filter((list) => list._id !== listId));
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    };

    const handleUpdate = (listId: string) => {
        router.push(`/list/${listId}`);
    };

    return (
        <div className="flex h-full w-full gap-6 p-6">
            <ListsPanel
                lists={lists}
                loading={loading}
                error={error}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            />
            <DashboardSidebar />
        </div>
    );
}
