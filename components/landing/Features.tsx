const features: { title: string; body: string; tab: string }[] = [
    {
        title: "Create",
        body: "Start a new pad in seconds and add the first items before anyone else even joins.",
        tab: "bg-emerald",
    },
    {
        title: "Update",
        body: "Rename, reorder, or edit any item — changes show up for the group right away.",
        tab: "bg-note-graphite",
    },
    {
        title: "Review",
        body: "See who added what and what's still open, so nothing quietly falls through.",
        tab: "bg-emerald-soft",
    },
    {
        title: "Delete",
        body: "Clear out finished items or scrap a pad entirely once it's done its job.",
        tab: "bg-note-slate",
    },
    {
        title: "Share",
        body: "Invite anyone with a link. They join the pad and edit alongside you, live.",
        tab: "bg-emerald-dark",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="mx-auto max-w-6xl px-6 py-16 md:py-24"
        >
            <h2 className="max-w-lg font-display text-3xl font-bold text-ink">
                Everything a shared list needs. Nothing it doesn&apos;t.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="overflow-hidden rounded-md border border-line bg-surface"
                    >
                        <div className={`h-1.5 w-full ${f.tab}`} />
                        <div className="p-5">
                            <h3 className="font-display text-lg font-bold text-ink">
                                {f.title}
                            </h3>
                            <p className="mt-2 font-body text-sm text-ink/70">
                                {f.body}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
