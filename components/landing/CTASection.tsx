import Link from "next/link";

export default function CTASection() {
    return (
        <section className="px-6 py-20 text-center">
            <div className="mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                    Get everyone on the same page. Literally.
                </h2>
                <p className="mt-4 font-body text-ink/70">
                    Free to start. No credit card, just a group that needs one
                    list instead of five.
                </p>
                <Link
                    href="/signup"
                    className="mt-8 inline-block rounded-md bg-emerald px-8 py-3 font-body font-semibold text-canvas transition-colors hover:bg-emerald-dark"
                >
                    Create your first pad
                </Link>
            </div>
        </section>
    );
}
