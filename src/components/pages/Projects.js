import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


export default function Projects(){
    return(
        

<div
  id="carouselBasicExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src='https://images.freeimages.com/images/large-previews/962/treasure-map-1190518.jpg'
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block card mdb-color">
        <h5 class="text-light">Map Marauders</h5>
        <p class="text-light">Map Marauders is a multiplayer geo guessing game! Create your own personal account and play with your friends. Guess the right city in the live chat and you will get a point. Using the google maps API, destinations are limitless! Other technologies used are HTML, CSS, Bootstrap, Handlebars, JavaScript, jQuery, RestAPI, Socket.io, Express, Node, MySQL, Passport, Sequelize, and Bcrypt. The Live Deployment can be found at <a target="_blank" href="https://map-marauders.herokuapp.com/">https://map-marauders.herokuapp.com/</a></p>
      </div>
    </div>

    <div class="carousel-item">
      <img
        src="https://images.freeimages.com/images/large-previews/79b/music-to-the-people-1494335.jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block card mdb-color">
        <h5 class="text-light">Music Search</h5>
        <p class="text-light">The Music Search web application uses three powerful API's (genius, lyric, and deezer) to present the user with song lyrics and a sample clip of the same song! Technologies also used in this project are HTML, CSS, JavaScript, and Zurb Foundation. The Live Deployment can be found at <a target="_blank" href="https://slown137.github.io/Music-Search-Project/#">https://slown137.github.io/Music-Search-Project/#</a></p>
      </div>
    </div>

    <div class="carousel-item">
      <img
        src="https://images.freeimages.com/images/large-previews/53d/diary-page-1240501.jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block card mdb-color">
        <h5 class="text-light">Personal Day Planner</h5>
        <p class="text-light">The Personal Day Planner will help you stay organized during these crazy times we are living through. Using JavaScript and local storage, see what you have added to your to do list, even when you leave the page! Other technologies used were HTML, CSS, and JS Moment. The Live Deployment can be found at <a target="_blank" href="https://lukespang.github.io/Personal-Day-Planner/">https://lukespang.github.io/Personal-Day-Planner/</a></p>
      </div>
    </div>
  </div>

  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    )
}