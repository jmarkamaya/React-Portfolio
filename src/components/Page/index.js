import React from "react";
import Hero from "../Hero"
import About from "../About";
import Portfolio from "../Portfolio";
import PageContent from "../PageContent";
import Footer from "../Footer"

function Page({currentPage}){
    const renderPage = () => {
        switch (currentPage.name.toLowerCase()) {
          case 'about me':
            return <About/>;
          case 'portfolio':
            return <Portfolio />;
          case 'hero':
            return <Hero/>;
          case 'footer':
            return 
          default:
            return <Hero/>;
        }
      };
    return(
        <section>
         
        {/* <h2>{currentPage.name}</h2> */}
        <PageContent>{renderPage()}</PageContent>
      </section>
    )
}

export default Page;