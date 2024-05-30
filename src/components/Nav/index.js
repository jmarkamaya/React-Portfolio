import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import About from '../About';

function Nav() {

  return (
    <nav style={{position: "sticky", top: 0, margin: 0, justifyContent: "center", alignItems: "center", display: "flex"}}>
    <ul className="flex-row" style={{backgroundColor: "#1F3B60"}}>
      
      
    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
    <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
    <li><Link to="portfolio" smooth={true} duration={500}>Projects</Link></li>
    <li><Link to="footer" smooth={true} duration={500}>Contact Me</Link></li>
        
    </ul>
    
  </nav>
  
);
  // const {
  //   pages = [],
  //   setCurrentPage,
  //   currentPage,
  // } = props;
  // useEffect(() => {
  //   document.title = currentPage.name;
  // }, [currentPage]);
  // return (
  //     <nav>
  //       <ul className="flex-row">
  //         {pages.map((Page) => (
  //         <Link to={Page.name}> <li
            
  //             className={`mx-5 ${
  //               currentPage.name === Page.name && 'navActive'
  //               }`}
  //             key={Page.name}
  //           >
  //             <span
  //               // onClick={() => setCurrentPage(Page)}
  //             >
  //               {Page.name}
  //             </span>
  //           </li>
  //           </Link> 
  //         ))}
  //       </ul>
  //     </nav>
  // );
}
export default Nav;