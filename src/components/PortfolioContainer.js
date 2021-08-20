import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home'

export default function PortfolioContainer(){
    const [currentPage, setCurrenPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'About') {
          return <About />;
          
        
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <Contact />;
      };

      const handlePageChange = (page) => setCurrenPage(page);

    return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
