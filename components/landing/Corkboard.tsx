import StickyNote from "./StickyNote";

export default function Corkboard() {
    return (
        <div className="relative mx-auto flex h-95 w-full max-w-md items-center justify-center rounded-lg border-8 border-line bg-surface p-6">
            <span className="pointer-events-none absolute -top-4 left-8 rotate-[-4deg] font-hand text-2xl text-ink-dim">
                Add Anything, Anytime
            </span>

            <StickyNote
                color="emerald"
                rotate={-6}
                className="absolute left-3 top-8"
            >
                Grab the tent for the trip 🏕️
            </StickyNote>

            <StickyNote
                color="graphite"
                rotate={4}
                className="absolute right-2 top-2"
            >
                <span className="line-through opacity-60">
                    Book the cabin — Sam
                </span>
            </StickyNote>

            <StickyNote
                color="emeraldSoft"
                rotate={2}
                className="absolute bottom-6 left-1"
            >
                Split the grocery run
            </StickyNote>

            <StickyNote
                color="slate"
                rotate={-3}
                className="absolute bottom-2 right-5"
            >
                Playlist for the drive 🎵
            </StickyNote>

            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-canvas px-3 py-1 font-mono text-xs text-ink-dim shadow-sm">
                shared with 4 people
            </span>
        </div>
    );
}
