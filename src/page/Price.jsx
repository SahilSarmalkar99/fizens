import React from 'react'
import PricingSection from '../components/PricingSection'
import ComparePlans from '../components/Price/ComparePlans'
import CTASection from '../components/CTASection'
import Footer from "../components/Footer"

const Price = () => {
  return (
    <div className='py-20' >
      
        <PricingSection />
        <ComparePlans />
        <CTASection />
        <Footer />
    </div>
  )
}

export default Price