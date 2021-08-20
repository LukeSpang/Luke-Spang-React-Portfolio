import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../style/Footer.css'

const Footer = () => {
  return (
    <MDBFooter class = "fixed-bottom"  color="default-color-dark" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
         
            <h5 className="title">Links</h5>
            <ul>
              <li class="d-flex justify-content-evenly" className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li class="d-flex justify-content-evenly" className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
            </ul>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  Spang Programming
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;