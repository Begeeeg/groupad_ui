export default function ListFormShell({
    title,
    error,
    children,
}: {
    title: string;
    error: string;
    children: React.ReactNode;
}) {
    return (
        <main className="mx-auto max-w-xl px-6 py-16">
            <div className="relative rounded-lg border border-line bg-surface p-8">
                <span
                    aria-hidden
                    className="absolute -top-2.5 left-8 h-5 w-5 rounded-full bg-emerald shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />

                <h1 className="font-display text-2xl font-bold text-ink">
                    {title}
                </h1>

                {error && (
                    <p className="mt-4 rounded-md border border-red-900/60 bg-red-950/30 px-4 py-3 font-body text-sm text-red-400">
                        {error}
                    </p>
                )}

                <div className="mt-6">{children}</div>
            </div>
        </main>
    );
}
