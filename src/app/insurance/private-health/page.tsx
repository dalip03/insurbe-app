
import PrivatePublicInsuranceHeroSection from "./PrivatePublicInsuranceHeroSection";
import PrivatePublicInsuranceBenefits from "./PrivatePublicInsuranceBenefits";
import PrivatePublicInsuranceFAQ from "./PrivatePublicFaq";
import PrivateInsuranceSteps from "./PrivateInsuranceSteps";
import PrivateInsuranceTariffs from "./PrivateInsuranceTariffs";

function PrivateHealthPage() {
  return (
    <section className="">
      <PrivatePublicInsuranceHeroSection />
      <PrivatePublicInsuranceBenefits />
      <PrivateInsuranceTariffs />
      <PrivateInsuranceSteps />
      <PrivatePublicInsuranceFAQ />
    </section>
  );
}

export default PrivateHealthPage;
