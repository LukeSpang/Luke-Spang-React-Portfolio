import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Header from "./components/Header.js";
//import Navbar from "./components/Navbar.js";
import PortfolioContainer from './components/PortfolioContainer.js';
import Footer from './components/Footer.js'

function App() {
  return (
   
    <div>
    <Header />  
    <PortfolioContainer />
    <br></br>
    <br></br>
    <br></br>
    <Footer />
    </div>
   
    
  );
}

export default App;
