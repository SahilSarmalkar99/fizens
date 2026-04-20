import React from 'react'
import JourneySection from '../components/About/JourneySection'
import MissionSection from '../components/About/MissionSection'
import StatsSection from '../components/StatsSection'
import TeamCard from '../components/About/TeamCard'
import Careers from '../components/About/Careers'
import TestimonialSection from '../components/TestimonialSection'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <JourneySection />
        <MissionSection />
        <StatsSection />
        <TeamCard />
        <Careers />
        <TestimonialSection />
        <Footer />
    </div>
  )
}

export default About