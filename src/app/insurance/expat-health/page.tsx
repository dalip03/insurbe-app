import React from 'react'
import ExpatFirstExpatHero from './ExpatFirstExpatHero'
import ExpatInsuranceBenefits from './ExpatInsuranceBenefits'
import ExpatInsuranceSteps from './ExpatInsuranceSteps'
import ExpatPublicInsuranceFAQ from './ExpatPublicFaq'
import FirstExpatHero from '../public-health/FirstExpatHero'
import Expatteriffcomparision from './Expatteriffcomparision'
import WhyExpatinsurance from './WhyExpatinsurance'

function ExpatHealthPage() {
  return (
   <section>
    <ExpatFirstExpatHero/>
    <WhyExpatinsurance/>
    <ExpatInsuranceBenefits/>
    <FirstExpatHero/>
    <Expatteriffcomparision/>
    <ExpatInsuranceSteps/>
    <ExpatPublicInsuranceFAQ/>
   </section>
  )
}

export default ExpatHealthPage
