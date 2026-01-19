"use client";

import { useRouter } from "next/navigation";
import PublicInsuranceBenefits from "./PublicInsuranceBenefits";
import FirstExpatHero from "./FirstExpatHero";
import PublicInsuranceHeroSection from "./PublicInsuranceHeroSection";
import ProviderComparison from "./ProviderComparison";
import InsuranceSteps from "../InsuranceSteps";
import PublicInsuranceFAQ from "./PublicFaq";

export default function PublicHealthPage() {

  return (

    <section className="">
      <PublicInsuranceHeroSection/>
      <PublicInsuranceBenefits/>
      <ProviderComparison/> 
      <FirstExpatHero/>
      <InsuranceSteps/>
      <PublicInsuranceFAQ/>
    </section>
  );
}
