import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import '../style/Footer.css'

const Footer = () => {
  return (
    <MDBFooter class = "fixed-bottom"  color="default-color-dark" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center ">
        <MDBRow>
         
            
        <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a target="_blank" href="https://www.linkedin.com/in/luke-spang-a6a960207/"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="white-text"
                    size="lg"
                  /></a>
                  
                  <a target="_blank" href="https://github.com/LukeSpang"><MDBIcon fab icon="github"
                    className="white-text"
                    size="lg"
                  /></a>
                  <a target="_blank" href="https://www.facebook.com/luke.spang.3"><MDBIcon fab icon="facebook-square"
                    className="white-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>
         
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