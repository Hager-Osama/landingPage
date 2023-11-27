import React from 'react'
import HeaderComponent from '../header/header'
import About from '../about/aboutSciencore'
import CallUs from '../Call-us/callUs'
import Footer from '../footer/footer'

const LandingPage = () => {
  return (
    <div>
      <HeaderComponent/>
      <About/>
      <CallUs/>
      <Footer/>
    </div>
  )
}

export default LandingPage
