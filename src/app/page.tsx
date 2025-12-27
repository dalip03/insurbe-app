import ChooseUs from "./components/ChooseUs";
import Expectations from "./components/Expectations";
import FAQ from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import HeroSection1 from "./components/HeroSection1";
import ProductBanner from "./components/ProductBanner";

export default function Home() {
  return (
    <main className="">
      {/* new home page designed  */}
      {/* <HeroSection1/> */}
      <HeroSection/>
      <FeaturesSection/>
      <ChooseUs />
      <ProductBanner />
      <Expectations />
      <FAQ />
    </main>
  );
}
