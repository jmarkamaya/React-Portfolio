import React, { useState } from "react";
import { Link } from 'react-scroll';
// import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  
  // const [pages] = useState([
  //   {
  //     name: "About Me",
  //   },
  //   { name: "Portfolio" },
  //   { name: "Footer" },
    
  // ]);

  
  
  // const [currentPage, setCurrentPage] = useState({name: ""});

  return (

    
    <div>
   

      <Nav></Nav>
    <section id='hero'>
      <Hero></Hero>
      </section>
      <section id='about'>  
        <About></About> 
      </section>
      <section id='portfolio'>
      <Portfolio></Portfolio>
      </section>
      <section id='footer'>
      <Footer></Footer>
      </section>
 
    
    </div>
  );
}

export default App;
