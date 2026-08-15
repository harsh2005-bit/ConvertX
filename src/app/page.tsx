import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { Services } from "@/components/sections/Services";
import { WhyConvertX } from "@/components/sections/WhyConvertX";
import { GrowthSystem } from "@/components/sections/GrowthSystem";
import { DashboardDemo } from "@/components/sections/DashboardDemo";
import { Industries } from "@/components/sections/Industries";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060608] text-slate-100 relative overflow-hidden">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <WhyConvertX />
      <GrowthSystem />
      <DashboardDemo />
      <Industries />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
