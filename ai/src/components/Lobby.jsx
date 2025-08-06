import React from 'react'
import './lobby.css';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import HeroSection from './HeroSection';
import Background from './Background';



function Lobby() {



  return (
    <div>
      <Background />
      <Navbar />
      <MobileMenu />
      <HeroSection />

    </div>
  )
}

export default Lobby