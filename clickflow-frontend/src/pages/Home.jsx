import React from 'react'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Home/Navbar'
import Logo from '../components/Home/Logo'
import Count from '../components/Home/Count'
import HassleFreeFlow from '../components/Home/HassleFreeFlow'
import MemberBenefits from '../components/Home/MemberBenefits'
import TestimonialSection from '../components/Home/TestimonialSection'
import CanadianBanner from '../components/Home/CanadianBanner'
import ShapoWidget from '../components/Home/ShapoWidget'
import Testimonials from '../components/Home/Testimonials'
import ClickFlowCTA from '../components/Home/ClickFlowCTA'
import FaqSection from '../components/Home/FaqSection'
import Footer from '../components/Home/Footer'
import RecentProjects from '../components/Home/RecentProjects'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Logo/>
        <Count/>
        <RecentProjects/>
        <HassleFreeFlow/>
        <MemberBenefits/>
        <TestimonialSection/>
        <CanadianBanner/>
        <Testimonials/>
        <ClickFlowCTA/>
        <FaqSection/>
        <Footer/>
    </div>
  )
}

export default Home