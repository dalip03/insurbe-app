import React from "react";
import PrivatePublicInsuranceHeroSection from "./PrivatePublicInsuranceHeroSection";
import PrivatePublicInsuranceBenefits from "./PrivatePublicInsuranceBenefits";
import PrivateProviderComparison from "./PrivateProviderComparison";
import PrivateFirstExpatHero from "../expat-health/ExpatFirstExpatHero";
import PrivatePublicInsuranceFAQ from "./PrivatePublicFaq";
import PrivateInsuranceSteps from "./PrivateInsuranceSteps";
import InsuranceCalculatorPrivate from "../InsuranceCalculatorPrivate";
import PrivatePricingComparison from "./PrivatePricingComparison";
import PrivateInsuranceTariffs from "./PrivateInsuranceTariffs";

function PrivateHealthPage() {
  return (
    <section className="">
      <PrivatePublicInsuranceHeroSection />
      <PrivatePublicInsuranceBenefits />
      <InsuranceCalculatorPrivate />
<PrivateInsuranceTariffs/>
      {/* <PrivatePricingComparison /> */}
      <PrivateInsuranceSteps />
      <PrivatePublicInsuranceFAQ />
    </section>
  );
}

export default PrivateHealthPage;
