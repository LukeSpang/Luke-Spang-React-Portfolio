import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../style/Navbar.css'


import {
MDBNavbar,
MDBNavbarNav,
MDBNavbarItem,
MDBNavbarToggler,
MDBNavbarLink,
MDBContainer,
MDBIcon } from 'mdb-react-ui-kit';

export default function Navbar({ currentPage, handlePageChange }) {
  return (
   
<nav id="nav" class="navbar navbar-light bg-light">
  <div class="row">
  <div class="col-md container-fluid">
    <a class="navbar-brand" href="#Home" onClick={()=> handlePageChange('Home')}>Home</a>
  </div>
  <div class="col-md container-fluid">
    <a class="navbar-brand" href="#About" onClick={()=> handlePageChange('About')}>About Me</a>
  </div>
  <div class="col-md container-fluid">
    <a class="navbar-brand" href="#Projects" onClick={()=> handlePageChange('Projects')}>Projects</a>
  </div>
  <div class="col-md container-fluid">
    <a class="navbar-brand" href="#Contact" onClick={()=> handlePageChange('Contact')}>Contact Me</a>
  </div>
  </div>
</nav>



    
  );
}
