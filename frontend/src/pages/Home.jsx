import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/Ourpolicy'
import NewsLatterBox from '../components/NewslatterBox'
const Home = () => {
  return (
    <div>
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <OurPolicy/>
    <NewsLatterBox/>
    </div>
  )
}

export default Home
