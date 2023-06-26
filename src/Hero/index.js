import React from "react";
import "../assets/css/style.css";

function HeroSection() {
  return (
    <div id="hero" classname="home">
      <div classname="container">
        <div classname="hero-content">
          <h1>
            <span classname="typed" data-typed-items="Faith Tharreo Masjuri" />
          </h1>
          <ul classname="list-unstyled list-social">
            <li>
              <a href="#">
                <i classname="bi bi-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i classname="bi bi-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i classname="bi bi-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i classname="bi bi-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
