"use client"
import React from 'react';
import ParticlesComponent from '../particles';
import Navbar from '../Navbar/page';
import HeroMain from '../HeroMain/page';
import Head from 'next/head';
const metaData = {
  title: "Nadish Umair Portfolio",
  description: "Nadish Umair Full Stack Developer Portfolio Projects",
  keywords: "nadish umair,projects, portfolio, web development, react, nextjs",
  author: "Nadish Umair",
 
};
const HeroSection = () => {
  return (
    <>
    <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <meta property="og:title" content={metaData.title} />
        
      </Head>

    <div style={{ position: "relative", width: "100", height: "100vh" }}>
      <ParticlesComponent  /> 
      <Navbar  />
      <HeroMain />
    </div>
    </>
  );
};

export default HeroSection;
