import type { Config } from "tailwindcss";

// Tailwind v4: colors and fonts are defined in app/globals.css via @theme.
// This file is only needed if you want to extend things that @theme
// can't express yet (e.g. plugins). Safe to delete if you don't need it.
const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    plugins: [],
};
export default config;
