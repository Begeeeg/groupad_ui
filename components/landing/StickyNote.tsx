type StickyColor = "emerald" | "emeraldSoft" | "graphite" | "slate";

const colorMap: Record<StickyColor, string> = {
    emerald: "bg-emerald text-canvas",
    emeraldSoft: "bg-emerald-soft text-ink",
    graphite: "bg-note-graphite text-ink",
    slate: "bg-note-slate text-ink",
};

export default function StickyNote({
    color,
    rotate = 0,
    className = "",
    children,
}: {
    color: StickyColor;
    rotate?: number;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`relative w-56 rounded-sm p-4 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.6)] ${colorMap[color]} ${className}`}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            {/* pushpin */}
            <span
                aria-hidden
                className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-emerald shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
            />
            <div className="font-body text-sm leading-snug">{children}</div>
        </div>
    );
}
