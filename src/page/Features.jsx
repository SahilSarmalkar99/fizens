import React from 'react'
import Hero from "../components/Features/Hero"
import FeaturesHeader from '../components/FeaturesHeader'
import FeaturesSection from '../components/Features/FeaturesCard'
import FeatureBenefit from '../components/Features/FeatureBenefit'
import HowItWorks from '../components/HowItWorks'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const Features = () => {
  return (
    <div>
        <Hero />
        <FeaturesHeader />
        <FeaturesSection />
        <FeatureBenefit />
        <HowItWorks />
        <CTASection />
        <Footer />
    </div>
  )
}

export default Features