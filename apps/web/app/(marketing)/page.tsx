"use client";

import { useEffect } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/sections/Benefits";
import { FAQ } from "@/components/sections/FAQ";
import { ForWhom } from "@/components/sections/ForWhom";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadForm } from "@/components/sections/LeadForm";
import { PilotGuarantees } from "@/components/sections/PilotGuarantees";
import { track } from "@/lib/analytics";

export default function HomePage() {
  useEffect(() => {
    track({ name: "page_view", props: { page: "home" } });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <ForWhom />
        <PilotGuarantees />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
