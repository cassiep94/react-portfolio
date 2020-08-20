import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import devour from "../assets/images/devour.jpeg";
import eatsafe from "../assets/images/eatsafe.jpeg";
import wheelsup from "../assets/images/wheelsup.jpg";
import password from "../assets/images/password.jpg";
import budtrac from "../assets/images/budtrac.jpg";
import emptracker from "../assets/images/employeedirec.png";


function Portfolio() {
  return (
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="wrapper">
          <h1 class="h1">Portfolio</h1>
          <hr color="#b3b3b3" />

          {/* column1 */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={devour} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Burger</h5>
                  <p class="card-text">
                  In this assignment, you'll create a burger logger with MySQL,
                   Node, Express, Handlebars and a homemade ORM (yum!).
                  </p>
                  <a
                    href="https://hangersburger.herokuapp.com"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cassiep94/burger"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={eatsafe} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Eat Safe</h5>
                  <p class="card-text">
                  This app features a search for restaurants in the city of your choosing. Then displays the 
											restaurant name, address, cuisine types, 
                      phone number, and links to the menu and zomato website.
                  </p>
                  <a
                    href="https://sornwill.github.io/eatsafe/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/sornwill/eatsafe"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* column 2 */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={wheelsup} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Wheels-Up</h5>
                  <p class="card-text">
                  This appplication tracks countries that users have visited and countries they want to visit in the future. It allows users to search for countries by typing in the name of that country, 
												search by alphabetical order, or search by regions of the world
                  </p>
                  <a
                    href="https://wheels-up.herokuapp.com"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/chueny/Wheels-Up"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={password} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Password Generator</h5>
                  <p class="card-text">
                  Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and
												 CSS powered by your JavaScript code
                  </p>
                  <a
                    href="https://cassiep94.github.io/passwordgenera/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cassiep94/passwordgenera"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* column 3 */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={budtrac} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Budget Tracker</h5>
                  <p class="card-text">
                  AS AN avid traveller I WANT to be able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account 
                  balance is accurate when I am traveling.
                  </p>
                  <a
                    href="https://budgettrackeroffline.herokuapp.com"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cassiep94/budgettracker"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={emptracker} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Employee Directory</h5>
                  <p class="card-text">
                    
              As a user, I want to be able to view my entire employee directory 
              at once so that I have quick access to their information.
                  </p>
                  <a
                    href="https://frozen-waters-89913.herokuapp.com"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cassiep94/employeedirectory"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          
            </div>
          </div>
        </div>
    
  );
}

export default Portfolio;
