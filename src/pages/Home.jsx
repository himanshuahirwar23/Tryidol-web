import React from 'react'
import Hero from './Hero'
import Discover from './Discover'
import Card from './Card'
import Portfolio from'./Portfolio'
import Testimonials from './Testimonials'
import Service from './Service'
import StatsSection from './StatsSection'
import Technologies from './Technologies'
import StandOut from './StandOut'
import CallBackForm from './CallBackForm'
import Footer from './Footer'
import Carousel from './carousel'


function Home() {
  return (
    <div>
        <Hero></Hero>
        <Portfolio></Portfolio>
        <Carousel></Carousel>
        <Card></Card>
        <Testimonials></Testimonials>
        <Service></Service>
        <StatsSection></StatsSection>
        <Technologies></Technologies>
        <StandOut></StandOut>
        <Discover></Discover>
        <CallBackForm></CallBackForm>
        <Footer></Footer>
      </div>
  )
}

export default Home