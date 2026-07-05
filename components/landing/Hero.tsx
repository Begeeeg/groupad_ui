import Link from "next/link";
import Corkboard from "./Corkboard";

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div>
                <span className="font-mono text-xs uppercase tracking-widest text-ink-dim">
                    one pad · every voice
                </span>
                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-ink md:text-5xl">
                    The list your whole group actually keeps up with.
                </h1>
                <p className="mt-5 max-w-md font-body text-lg text-ink/75">
                    Start a pad, invite your people, and add, check off, or edit
                    items together in real time. No more five different group
                    chats trying to remember who brought the tent.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/signup"
                        className="rounded-md bg-emerald px-6 py-3 font-body font-semibold text-canvas transition-colors hover:bg-emerald-dark"
                    >
                        Start a pad — it&apos;s free
                    </Link>
                    <a
                        href="#how-it-works"
                        className="rounded-md border-2 border-ink/15 px-6 py-3 font-body font-semibold text-ink transition-colors hover:border-ink/40"
                    >
                        See how it works
                    </a>
                </div>
            </div>

            <Corkboard />
        </section>
    );
}
