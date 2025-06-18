import React from 'react'
import AboutHeroSection from '../components/AboutUsComponents/AboutHeroSection'
import AboutPlatformSection from '../components/AboutUsComponents/AboutPlatformSection'
import MeetTheTeamSection from '../components/AboutUsComponents/MeetTheTeamSection'
import ExpansionSection from '../components/AboutUsComponents/ExpansionSection'
import Growth from '../components/AboutUsComponents/AboutGrowth'

function About() {
  return (
    <div>
      <AboutHeroSection/>
      <AboutPlatformSection/>
      <MeetTheTeamSection/>
      <ExpansionSection/>
      <Growth/>
    </div>
  )
}

export default About
