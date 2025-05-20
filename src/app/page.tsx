import ChooseUs from "./components/ChooseUs";
import ContactBanner from "./components/ContactBanner";
import Expectations from "./components/Expectations";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import ProductBanner from "./components/ProductBanner";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Partners />
      <ChooseUs />
      <ProductBanner />
      <Expectations />
      <FAQ />
    </main>
  )
}
