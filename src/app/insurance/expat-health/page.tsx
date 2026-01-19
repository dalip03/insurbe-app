import React from 'react'
import ExpatFirstExpatHero from './ExpatFirstExpatHero'
import ExpatInsuranceBenefits from './ExpatInsuranceBenefits'
import ExpatInsuranceSteps from './ExpatInsuranceSteps'
import ExpatPublicInsuranceFAQ from './ExpatPublicFaq'
import FirstExpatHero from '../public-health/FirstExpatHero'

function ExpatHealthPage() {
  return (
   <section>
    <ExpatFirstExpatHero/>
    <ExpatInsuranceBenefits/>
    <FirstExpatHero/>
    <ExpatInsuranceSteps/>
    <ExpatPublicInsuranceFAQ/>
   </section>
  )
}

export default ExpatHealthPage
