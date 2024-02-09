import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'

const Hero = () => {
  return (
    <div>
      <Main />
      <Section1 />  
      <Section2 />
      <Section3 price={150} />
    </div>
  )
}

export default Hero
