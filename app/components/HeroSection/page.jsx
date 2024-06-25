"use client"
import React from 'react';
import ParticlesComponent from '../particles';
import Navbar from '../Navbar/page';
import HeroMain from '../HeroMain/page';

const HeroSection = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <ParticlesComponent  /> 
      <Navbar  />
      <HeroMain />
    </div>
  );
};

export default HeroSection;
