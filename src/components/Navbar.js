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
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
  <div class="col-md container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
  <div class="col-md container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
  </div>
</nav>


    
  );
}