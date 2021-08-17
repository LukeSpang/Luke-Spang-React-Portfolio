import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


import {
MDBNavbar,
MDBNavbarNav,
MDBNavbarItem,
MDBNavbarToggler,
MDBNavbarLink,
MDBContainer,
MDBIcon } from 'mdb-react-ui-kit';
import '../style/Navbar.css'

export default function Navbar() {
  return (
<nav class="navbar navbar-light bg-light">
  <div class="row">
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