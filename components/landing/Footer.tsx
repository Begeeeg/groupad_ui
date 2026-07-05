export default function Footer() {
    return (
        <footer className="border-t border-line px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-body text-sm text-ink/60 md:flex-row">
                <span>
                    Group<span className="text-emerald">Pad</span> · shared
                    lists for real groups
                </span>
                <span>
                    © {new Date().getFullYear()} GroupPad. All rights reserved.
                </span>
            </div>
        </footer>
    );
}
