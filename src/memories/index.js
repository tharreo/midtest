import React from "react";
import "../../assets/css/style.css";

function MemoriesSection() {
  return (
    <div id="portfolio" classname="paddsection">
      <div classname="container">
        <div classname="section-title text-center">
          <h2>Memories</h2>
        </div>
      </div>
      <div classname="container">
        <div classname="row">
          <div classname="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" classname="filter-active">
                Here some Photos about me!
              </li>
            </ul>
          </div>
        </div>
        <div classname="row portfolio-container">
          <div classname="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/2.jpg" classname="img-fluid" alt />
            <div classname="portfolio-info">
              <h4>Family</h4>
              <a
                href="assets/img/portfolio/portfolio-1.jpg"
                data-gallery="portfolioGallery"
                classname="portfolio-lightbox preview-link"
                title="App 1"
              >
                <i classname="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                classname="details-link"
                title="More Details"
              >
                <i classname="bx bx-link" />
              </a>
            </div>
          </div>
          {"{"}/* Add the remaining portfolio items similarly */{"}"}
        </div>
      </div>
    </div>
  );
}

export default MemoriesSection;
