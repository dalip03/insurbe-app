"use client";

import HeroStudents from "@/app/components/students/HeroStudents";
import WeOffersStudent from "@/app/components/ProductComponents/WeOffersStudent";
import StudentInsuranceComparisonLight1 from "@/app/components/students/StudentInsuranceComparisonLight1";
import PublicVsPrivateIntro from "@/app/components/students/PublicVsPrivateIntro";
import InsuranceEligibilityQuiz from "./InsuranceEligibilityQuiz";
import MawistaComparisonTable from "./MawistaComparisonTable";

export default function Students() {
  return (
    <section>
      <HeroStudents />
      <WeOffersStudent />
      {/* <StudentInsuranceComparisonLight1 /> */}
      <MawistaComparisonTable/>
      <PublicVsPrivateIntro/>
      <InsuranceEligibilityQuiz/>
    </section>
  );
}
