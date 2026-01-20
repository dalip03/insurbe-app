import PensionProductHeroSection from "@/app/components/ProductComponents/pensionProductHeroSection";
import PrivatePensionSection from "@/app/components/ProductComponents/PrivatePensionSection";
import PensionFormSection from "@/app/components/ProductComponents/PensionFormSection";
import FamilyInsuranceTax from "@/app/components/ProductComponents/FamilyInsuranceTax";
import FamilyPensionPlans from "@/app/components/ProductComponents/FamilyPensionPlans";
import FamilyFaq from "@/app/components/ProductComponents/FamilyFaq";
import FamilyRetirementPlan from "@/app/components/ProductComponents/FamilyRetirementPlan";

function PensionPlans() {
  return (
    <div>
      <PensionProductHeroSection />
      <PrivatePensionSection />
      <FamilyInsuranceTax />


      <FamilyPensionPlans />
      <FamilyRetirementPlan />
      <FamilyFaq />
    </div>
  );
}

export default PensionPlans;
