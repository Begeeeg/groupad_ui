const steps = [
    {
        n: "1",
        title: "Create your pad",
        body: "Name it, add a first few items, and it's ready to go.",
    },
    {
        n: "2",
        title: "Share the link",
        body: "Send it to your group. No account required just to view it.",
    },
    {
        n: "3",
        title: "Edit it together",
        body: "Everyone adds, checks off, and updates items as things change.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="border-y border-line bg-surface px-6 py-16 md:py-24"
        >
            <div className="mx-auto max-w-6xl">
                <h2 className="font-display text-3xl font-bold text-ink">
                    From blank pad to shared list in three steps.
                </h2>
                <div className="mt-10 grid gap-10 sm:grid-cols-3">
                    {steps.map((s) => (
                        <div key={s.n} className="relative pl-4">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald font-display text-sm font-bold text-canvas">
                                {s.n}
                            </span>
                            <h3 className="mt-4 font-display text-lg font-bold text-ink">
                                {s.title}
                            </h3>
                            <p className="mt-2 font-body text-sm text-ink/70">
                                {s.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
