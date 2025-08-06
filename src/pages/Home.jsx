import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatruredSection from '../components/FeaturedSection'
import TrailersSection from '../components/TrailersSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatruredSection/>
      <TrailersSection/>
    </div>
  )
}

export default Home