import AboutSectionnew from "./components/AboutComponent/AboutSectionnew";
import ChooseUs from "./components/ChooseUs";
import Expectations from "./components/Expectations";
import FAQ from "./components/FAQ";
import Featureshome from "./components/Featureshome";
import FeaturesSection from "./components/FeaturesSection";
import HeroInsurance from "./components/HeroInsurance";
import HeroSection from "./components/HeroSection";
import HeroSection1 from "./components/HeroSection1";
import HeroSection11 from "./components/HeroSection11";
import HeroSectionnew from "./components/HeroSectionnew";
import ProductBanner from "./components/ProductBanner";

export default function Home() {
  return (
    <main className="">
      {/* new home page designed  */}
      {/* <HeroSection1/> */}
      {/* <HeroSection/> */}
      {/* <HeroSectionnew/> */}
      <HeroSection11/>
      {/* <HeroInsurance/> */}
      <Featureshome/>
      <ChooseUs />
      <ProductBanner />
      <AboutSectionnew />
      {/* <Expectations /> */}
      <FAQ />
    </main>
  );
}
