import React, { useState } from "react";
// import Header from "./components/Header";
import Nav from "./components/Nav";
// import Hero from "./components/Hero";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  
  const [pages] = useState([
    {
      name: "About Me",
    },
    { name: "Portfolio" },
    { name: "Footer" },
    
  ]);

  
  
  const [currentPage, setCurrentPage] = useState({name: 'Hero'});

  return (

    
    <div>
      
      <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      >

      </Nav>
 
      <main>
      <Page
      currentPage={currentPage}
      >

      </Page>
      </main>

      <Footer />
    
    </div>
  );
}

export default App;
