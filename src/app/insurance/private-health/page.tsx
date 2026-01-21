
import PrivatePublicInsuranceHeroSection from "./PrivatePublicInsuranceHeroSection";
import PrivatePublicInsuranceBenefits from "./PrivatePublicInsuranceBenefits";
import PrivatePublicInsuranceFAQ from "./PrivatePublicFaq";
import PrivateInsuranceSteps from "./PrivateInsuranceSteps";
import InsuranceCalculatorPrivate from "../InsuranceCalculatorPrivate";
import PrivateInsuranceTariffs from "./PrivateInsuranceTariffs";

function PrivateHealthPage() {
  return (
    <section className="">
      <PrivatePublicInsuranceHeroSection />
      <PrivatePublicInsuranceBenefits />
      <InsuranceCalculatorPrivate />
      <PrivateInsuranceTariffs />
      <PrivateInsuranceSteps />
      <PrivatePublicInsuranceFAQ />
    </section>
  );
}

export default PrivateHealthPage;
