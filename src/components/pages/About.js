import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Hello There!</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="./Hero.JPG"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                
              </MDBCardTitle>
              <MDBCardText>
              My Name? Luke Spang. My goal? To show you projects that I am most passionate and proud of. My background is in health care as a registered nurse. After extensive education and hard work, I am proud to say that I am now a full stack computer programmer. In my free time I am a huge sports fan. Being from Pennsylvania, I grew up loving everything Philly. I have recently relocated to Raleigh, North Carolina, so my fiancee and I enjoy exploring new areas and trying new food! I also love the beach and the ocean. If it were up to me, I would be coding in a beach chair right now.

              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a target="_blank" href="https://www.linkedin.com/in/luke-spang-a6a960207/"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  
                  <a target="_blank" href="https://github.com/LukeSpang"><MDBIcon fab icon="github"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;
