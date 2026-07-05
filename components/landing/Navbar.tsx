import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-line bg-canvas/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="font-display text-xl font-bold text-ink"
                >
                    Group<span className="text-emerald">Pad</span>
                </Link>

                <nav className="hidden gap-8 font-body text-sm font-medium text-ink/80 md:flex">
                    <a href="#features" className="hover:text-ink">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-ink">
                        How it works
                    </a>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="font-body text-sm font-medium text-ink/80 hover:text-ink"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/signup"
                        className="rounded-md bg-emerald px-4 py-2 font-body text-sm font-semibold text-canvas transition-colors hover:bg-emerald-dark"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    );
}
