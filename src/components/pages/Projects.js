import React from 'react';

export default function Projects(){
    return(
        <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-8 col-lg-7"><a target="_blank" href="https://slown137.github.io/Music-Search-Project/#"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/FinalMusic.png" alt="..." /></a></div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>Music Search!</h4>
                        <p class="text-black-50 mb-0">The Music Search web application uses three powerful API's (genius, lyric, and deezer) to present the user with song lyrics and a sample clip of the same song! Technologies also used in this project are HTML, CSS, JavaScript, and Zurb Foundation. The Live Deployment can be found at <a target="_blank" href="https://slown137.github.io/Music-Search-Project/#">https://slown137.github.io/Music-Search-Project/#</a> </p>
                    </div>
                </div>
            </div>
            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><a target="_blank" href="https://map-marauders.herokuapp.com/"><img class="img-fluid" src="assets/img/MapGamePage2.png" alt="Map Game Page" /></a></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white">Map Marauders!</h4>
                                <p class="mb-0 text-white-50">Map Marauders is a multiplayer geo guessing game! Create your own personal account and play with your friends. Guess the right city in the live chat and you will get a point. Using the google maps API, destinations are limitless! Other technologies used are HTML, CSS, Bootstrap, Handlebars, JavaScript, jQuery, RestAPI, Socket.io, Express, Node, MySQL, Passport, Sequelize, and Bcrypt. The Live Deployment can be found at <a target="_blank" href="https://map-marauders.herokuapp.com/">https://map-marauders.herokuapp.com/</a></p>
                                <hr class="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6"><a target="_blank" href="https://lukespang.github.io/Personal-Day-Planner/"><img class="img-fluid" src="assets/img/FinalPlanner.png" alt="..." /></a></div>
                <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="text-white">Personal Day Planner</h4>
                                <p class="mb-0 text-white-50">The Personal Day Planner will help you stay organized during these crazy times we are living through. Using JavaScript and local storage, see what you have added to your to do list, even when you leave the page! Other technologies used were HTML, CSS, and JS Moment. The Live Deployment can be found at <a target="_blank" href="https://lukespang.github.io/Personal-Day-Planner/">https://lukespang.github.io/Personal-Day-Planner/</a> </p>
                                <hr class="d-none d-lg-block mb-0 me-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}