import React from 'react'
import Nav from '../Nav'
import heroImage from './react-portfolio-hero.jpg'
import './Hero.css'

function Hero() {
  return (
    
    <section className="hero">
     <img src={heroImage}  alt="Hero Image" className="full-width" />

      <h1>Your Catchy Slogan</h1>
      <p>Welcome to my portfolio. Explore my work below.</p>
    </section>
  );
};

export default Hero;


