import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import pic from '../assets/images/picholder.JPG.png'

function Home() {
  return (

    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="wrapper">
        <div class="row1">
          <h1 class="h1">About Me</h1>
          <hr color="#b3b3b3" />
        </div>
        <section id="floatimage">
          {/* <img src={pic} alt="Pic here"/> */}
        </section>
        <p class="p">
          I am from Durango, Mexico. 
          I  have spend the last sixteen years of my life here in Minnesota. 
          I love to travel, reading books, news articles and problem solving. 
        </p>
        <p class="p">
          I will be graduating from the University Of Minnesota Coding Bootcamp. 
          With better understanding on how web-development works. I am a certified macOS, 
          and iOS repair technician.
           <br /><br />
           I always wanted to become a software developer. I decided to pursue
          development of some kind and signed up for the Full Stack
          Bootcamp course.
        </p>
        
      </div>
    </div>
    <div class="col-md-1"></div>
  </div>
  );
}

export default Home;
