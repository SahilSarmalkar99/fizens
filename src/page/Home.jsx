import React from 'react'
import Hero from '../components/Home/Hero'
import FeatureHero from '../components/Home/FeatureHero'
import FeaturesHeader from '../components/FeaturesHeader'
import FeaturesSection from '../components/Home/FeaturesSection'
import ScrollShowcase from '../components/Home/ScrollShowcase'
import CardStackScroll from '../components/Home/StickyCards'
import StickyCards from '../components/Home/StickyCards'
import StatsSection from '../components/StatsSection'
import HowItWorks from '../components/HowItWorks'
import TestimonialSection from '../components/TestimonialSection'
import PricingSection from '../components/PricingSection'
import BlogSection from '../components/Home/BlogSection'
import FAQSection from '../components/Home/FAQSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import BrandSection from '../components/Home/BrandSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <BrandSection />
        <FeatureHero />
        <FeaturesHeader />
        <FeaturesSection />
        <ScrollShowcase />
        <StickyCards />
        <StatsSection />
        <HowItWorks />
        {/* <TestimonialSection /> */}
        <PricingSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
        <Footer />
    </div>
  )
}

export default Home