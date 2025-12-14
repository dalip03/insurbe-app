import React from 'react'
import ContactSection from '../components/contact'
import ContactHero from '../components/contactComponent/ContactHero'
import ContactPolicies from '../components/contactComponent/ContactPolicies'
import OurPolicies from '../components/contactComponent/OurPolicies'
import PolicyAssessment from '../components/contactComponent/PolicyAssessment'
import InsuranceCompanion from '../components/contactComponent/InsuranceCompanion'
import Testimonials from '../components/contactComponent/Testimonials'


function page() {
  return (
    <div>
      {/* <ContactSection /> */}
      <ContactHero/>
      <ContactPolicies/>
      <OurPolicies/>
      <PolicyAssessment/>
      <InsuranceCompanion/>
      <Testimonials/>
    </div>
  )
}

export default page
