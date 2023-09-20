import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import PageContent from "../PageContent";

function Page({currentPage}){
    const renderPage = () => {
        switch (currentPage.name) {
          case 'about me':
            return <About />;
          case 'portfolio':
            return <Portfolio />;
          default:
            return <About />;
        }
      };
    return(
        <section>
        <h2>{currentPage.name}</h2>
        <PageContent>{renderPage()}</PageContent>
      </section>
    )
}

export default Page;