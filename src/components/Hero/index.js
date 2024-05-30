import React from 'react'
import Nav from '../Nav'
import heroImage from './react-portfolio-hero.jpg'
import './Hero.css'

function Hero() {
  return (
    
    <section className="hero">
      <h2 style= {{display: "flex", justifyContent: "center", alignItems: "center"}}>
        Welcome to my portfolio. Learn more about me and explore my work.
        </h2>
     <img src={heroImage}  alt="Hero Image" className="full-width" />
    </section>
  );
};

export default Hero;


