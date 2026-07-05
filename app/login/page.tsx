import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
    title: "Log in — GroupPad",
};

export default function LoginPage() {
    return (
        <AuthCard
            eyebrow="welcome back"
            title="Log in to your pads"
            subtitle="Pick up right where your group left off."
            footer={
                <>
                    New here?{" "}
                    <Link
                        href="/signup"
                        className="text-emerald hover:text-emerald-dark"
                    >
                        Create an account
                    </Link>
                </>
            }
        >
            <LoginForm />
        </AuthCard>
    );
}
