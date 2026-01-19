"use client";

import { motion } from "framer-motion";
import {
  Check,
  Landmark,
  Users,
  ShieldCheck,
  ArrowRight,
  Euro,
  Building2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import PublicInsuranceBenefits from "./PublicInsuranceBenefits";
import FirstExpatHero from "./FirstExpatHero";
import PublicInsuranceHeroSection from "./PublicInsuranceHeroSection";
import ProviderComparison from "./ProviderComparison";
import InsuranceSteps from "../InsuranceSteps";
import PublicInsuranceFAQ from "./PublicFaq";

export default function PublicHealthPage() {
  const router = useRouter();

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
