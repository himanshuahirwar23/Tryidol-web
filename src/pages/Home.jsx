import React from 'react'
import Hero from './Hero'
import Discover from './Discover'
import Portfolio from './portfolio'
import Card from './Card'
import Testimonials from './Testimonials'
import Service from './Service'
import StatsSection from './StatsSection'
import Technologies from './Technologies'
import StandOut from './StandOut'
import CallBackForm from './CallBackForm'
import Footer from './Footer'


function Home() {
  return (
    <div>
        <Hero></Hero>
        <Discover></Discover>
        <Portfolio></Portfolio>
        <Card></Card>
        <Testimonials></Testimonials>
        <Service></Service>
        <StatsSection></StatsSection>
        <Technologies></Technologies>
        <StandOut></StandOut>
        <CallBackForm></CallBackForm>
        <Footer></Footer>
    </div>
  )
}

export default Home