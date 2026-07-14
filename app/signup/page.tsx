import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign up — GroupPad",
};

export default async function SignupPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt");

    if (token) {
        redirect("/home");
    }

    return (
        <AuthCard
            eyebrow="one pad · every voice"
            title="Start your first pad"
            subtitle="Free to create. Invite your group right after."
            footer={
                <>
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-emerald hover:text-emerald-dark"
                    >
                        Log in
                    </Link>
                </>
            }
        >
            <SignupForm />
        </AuthCard>
    );
}
