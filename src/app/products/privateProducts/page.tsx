import WhyPrivateInsurance from "../../components/ProductComponents/WhyPrivateInsurance";
import OurServices from "../../components/ProductComponents/OurServices";
import WeOffers from "@/app/components/ProductComponents/WeOffers ";
import ProductHeroSectionnew from "@/app/components/ProductComponents/ProductHeroSectionnew";
import PrivateFAQ from "@/app/components/ProductComponents/PrivateFaq";

function ProductPage() {
  return (
    <div>   
      <ProductHeroSectionnew/>   
      <WeOffers />
      <WhyPrivateInsurance />
      <OurServices />
      <PrivateFAQ />
    </div>
  );
}

export default ProductPage;
