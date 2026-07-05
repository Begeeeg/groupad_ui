import CTASection from "@/components/landing/CTASection";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";

export default function page() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <CTASection />
            <Footer />
        </>
    );
}
