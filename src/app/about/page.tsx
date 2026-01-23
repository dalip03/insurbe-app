import AboutPartners from "../components/AboutUsComponents/AboutPartners";
import AboutHero from "../components/AboutComponent/AboutHero";
import AboutHeads from "../components/AboutComponent/AboutHeads";
import AboutTeamNew from "../components/AboutComponent/AboutTeamNew";
import FeaturesSection from "../components/FeaturesSection";
import SustainableSection from "../components/AboutComponent/SustainableSection";

function About() {
  return (
    <div>
      <AboutHero />
      <FeaturesSection />
      <AboutHeads />
      <AboutTeamNew />
      <AboutPartners />
      <SustainableSection />
    </div>
  );
}

export default About;
