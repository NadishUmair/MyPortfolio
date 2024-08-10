"use client"
import React from "react";
import HeroSection from "./components/HeroSection/page";
import Projects from "./components/Projects/page";

import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "./components/Footer/page";
import Skills from "./components/Skills/page";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          backgroundColor: "#61D2B4",
          scaleX,
          transformOrigin: "0%",
          zIndex: 10, 
          transition: "all 0.3s ease-out" // Smooth transition for initial appearance
        }}
        initial={{ scaleX: 0 }} // Start with 0 width
        animate={{ scaleX: scrollYProgress }} // Animate to scroll progress
      />
      <div style={{ marginTop: "5px" }}>
        <HeroSection />
        <Skills />
        <Projects />
        <Footer/>
      </div>
    </>
  );
}
