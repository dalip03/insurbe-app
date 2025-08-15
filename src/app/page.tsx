import ChooseUs from "./components/ChooseUs";
import Expectations from "./components/Expectations";
import FAQ from "./components/FAQ";
import HeroSectionTop from "./components/Herosection";
import Partners from "./components/Partners";
import ProductBanner from "./components/ProductBanner";

export default function Home() {
  return (
    <main>
      {/* new home page designed  */}
      <HeroSectionTop/>
      <Partners />
      <ChooseUs />
      <ProductBanner />
      <Expectations />
      <FAQ />
    </main>
  );
}
