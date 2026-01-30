import ExpatFirstExpatHero from './ExpatFirstExpatHero'
import ExpatInsuranceSteps from './ExpatInsuranceSteps'
import ExpatPublicInsuranceFAQ from './ExpatPublicFaq'
import FirstExpatHero from '../public-health/FirstExpatHero'
import Expatteriffcomparision from './Expatteriffcomparision'
import WhyExpatinsurance from './WhyExpatinsurance'
import WhyExpatInsuranceNew from './WhyExpatInsurancenew'

function ExpatHealthPage() {
  return (
   <section>
    <ExpatFirstExpatHero/>
    <WhyExpatinsurance/>
    <WhyExpatInsuranceNew/>
    <FirstExpatHero/>
    <Expatteriffcomparision/>
    <ExpatInsuranceSteps/>
    <ExpatPublicInsuranceFAQ/>
   </section>
  )
}

export default ExpatHealthPage
