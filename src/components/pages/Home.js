import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const Home = () => {
  return (
    <MDBRow>
      <MDBCol md='6'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://images.freeimages.com/images/large-previews/62f/computer-keyboard-1188763.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='green-text'>
                <MDBIcon icon='desktop' /> Web Development
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Hard Skills</strong>
              </MDBCardTitle>
              <p>
              My strengths and skills include: JavaScript, React, Databases (MySQL, MongoDB), Server Side Development (MERN Stack, Progressive Web Applications), Browser Based Technologies (HTML5, CSS, jQuery, Bootstrap, Handlebars), Deployment/Command-Line Fundamentals (Heroku, Git), API Interaction (API, JSON, AJAX), Quality Assurance (Unit Testing, Linting, Continuous Integration), as well as Python, Java, C#, and Amazon Web Services.
              </p>
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md='6'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://images.freeimages.com/images/large-previews/4f6/team-meeting-1458975.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
            <div>
              <h5 className='green-text'>
                <MDBIcon icon='desktop' /> Work Place
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Soft Skills</strong>
              </MDBCardTitle>
              <p>
                From working in the health care world as a registered nurse for four year I have developed a unique set of soft skills that can make me incredibly valuable to any company. Some of these skills include teamwork, creativity, empathy, a willingness to learn, critical thinking, effective/deliberate communication, flexibility, training, leadership, training, and conflict resolution. I believe I would make a fantastic addition to any team.
              </p>
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default Home;