"use client";

import { useRouter } from "next/navigation";
import PublicInsuranceBenefits from "./PublicInsuranceBenefits";
import FirstExpatHero from "./FirstExpatHero";
import PublicInsuranceHeroSection from "./PublicInsuranceHeroSection";
import ProviderComparison from "./ProviderComparison";
import InsuranceSteps from "../InsuranceSteps";
import PublicInsuranceFAQ from "./PublicFaq";
import InsuranceCalculatorPrivate from "../InsuranceCalculatorPrivate";
import { useState } from "react";

export default function PublicHealthPage() {

  const [premium, setPremium] = useState<number | null>(null);

  return (

    <section className="">
      <PublicInsuranceHeroSection/>
      <PublicInsuranceBenefits/>
      <InsuranceCalculatorPrivate setPremium={setPremium} premium={premium} />      
      <ProviderComparison premium={premium} /> 
      <FirstExpatHero/>
      <InsuranceSteps/>
      <PublicInsuranceFAQ/>
    </section>
  );
}
