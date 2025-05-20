import React from 'react'
import ProductHeroSection from '../components/ProductComponents/productHeroSection'
import CardsSection from '../components/ProductComponents/CardsSection'
import WhyPrivateInsurance from '../components/ProductComponents/WhyPrivateInsurance'
import FAQ from '../components/FAQ'
import OurServices from '../components/ProductComponents/OurServices'
import InsuranceSteps from '../components/ProductComponents/InsuranceSteps'

function ProductPage() {
  return (
    <div>
      <ProductHeroSection/>
      <CardsSection/>
      <WhyPrivateInsurance/>
      <InsuranceSteps/>
      <OurServices/>
      <FAQ/>
    </div>
  )
}

export default ProductPage
