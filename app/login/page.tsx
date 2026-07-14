import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Log in — GroupPad",
};

export default async function LoginPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt");

    if (token) {
        redirect("/home");
    }

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
