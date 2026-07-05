import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500", "700"],
    variable: "--font-space-grotesk",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-caveat",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-plex-mono",
});

export const metadata: Metadata = {
    title: "GroupPad — one pad, every voice in your group",
    description:
        "Create shared lists, edit them together, and keep everyone in your group on the same page.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} ${plexMono.variable} font-body antialiased`}
            >
                <main>{children}</main>

                <Toaster richColors position="bottom-right" />
            </body>
        </html>
    );
}
