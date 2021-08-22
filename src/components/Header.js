import React from 'react';
import {
MDBNavbar,
MDBNavbarNav,
MDBNavbarItem,
MDBNavbarToggler,
MDBNavbarLink,
MDBContainer,
MDBIcon } from 'mdb-react-ui-kit';
import '../style/Header.css'

export default function Header() {
  return (
    <header>
      
      <div
        id="header"
        className='p-5 text-center bg-image'
        
      
      >
        <div  className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Luke Spang</h1>
              <h5 className='mb-4'>Full Stack Web Developer</h5>
              <a
                target = "_blank"
                className='btn btn-outline-light btn-lg m-2'
                href='https://docs.google.com/document/d/1zNAey7pOuVxllIHFmiqRRMmv8EO3eplfr3G30b8WKRE/edit?usp=sharing'
                role='button'
                rel='nofollow'
                target='_blank'
              >
                RESUME
              </a>
              <a
                target = "_blank"
                className='btn btn-outline-light btn-lg m-2'
                href='https://docs.google.com/document/d/1xS4QoTx5aH23SLObtiM1V7oBrgeHgkjAnjcA1fTA73I/edit?usp=sharing'
                role='button'
                rel='nofollow'
                target='_blank'
              >
                COVER LETTER
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}