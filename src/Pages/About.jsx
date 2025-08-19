import React from 'react'
import Header from '../Component/Headers/Header'
import Feature from '../Component/Features/Feature'
import Newsletter from '../Component/Newsletters/Newsletter'
import Footer from '../Component/Footers/Footer'
import DownloadApp from '../Component/About/DownloadApp'
import AboutInfo from '../Component/About/AboutInfo'
import AboutInfo1 from '../Component/About/AboutInfo1'

const About = () => {
  return (
    <>
      <Header />
      <AboutInfo />
      <AboutInfo1 />
      <DownloadApp />
      <Feature />
      <Newsletter />
      <Footer />
    </>
  )
}

export default About
