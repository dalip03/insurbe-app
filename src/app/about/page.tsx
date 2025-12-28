import React from 'react'
import AboutHeroSection from '../components/AboutUsComponents/AboutHeroSection'
import AboutPlatformSection from '../components/AboutUsComponents/AboutPlatformSection'
import MeetTheTeamSection from '../components/AboutUsComponents/MeetTheTeamSection'
import ExpansionSection from '../components/AboutUsComponents/ExpansionSection'
import Growth from '../components/AboutUsComponents/AboutGrowth'
import AboutGrowth from '../components/AboutUsComponents/AboutGrouwth'
import AboutPartners from '../components/AboutUsComponents/AboutPartners'
import AboutJourney from '../components/AboutUsComponents/AboutJourney'
import AboutHero from '../components/AboutComponent/AboutHero'
import AboutHistory from '../components/AboutComponent/AboutHistory'
import AboutHeads from '../components/AboutComponent/AboutHeads'
import AboutTeamNew from '../components/AboutComponent/AboutTeamNew'
import HandInHand from '../components/AboutComponent/HandInHand'
import Partners from "../components/Partners";
import FeaturesSection from '../components/FeaturesSection'
import SustainableSection from '../components/AboutComponent/SustainableSection'

function About() {
  return (
    <div>
      {/* <AboutHeroSection/> */}
      <AboutHero/>
      {/* <AboutPlatformSection/> */}
      {/* <AboutHistory/> */}
         <FeaturesSection/>
      {/* <MeetTheTeamSection/> */}
      <AboutHeads/>
      {/* <ExpansionSection/> */}
      <AboutTeamNew/>
      {/* <AboutGrowth/> */}
      <AboutPartners/>
      <SustainableSection/>
       {/* <Partners/> */}
      {/* <Growth/> */}
      {/* <AboutPartners/> */}
      {/* <HandInHand/> */}
      {/* <AboutJourney/> */}
    </div>
  )
}

export default About
