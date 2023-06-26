import React from "react";
import "../assets/css/style.css";

function MemoriesSection() {
  return (
   <div id="portfolio" className="paddsection">
  <div className="container">
    <div className="section-title text-center">
      <h2>Memories</h2>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">
            Here some Photos about me!
          </li>
        </ul>
      </div>
    </div>
    <div className="row portfolio-container">
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/2.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Family</h4>
          <a href="assets/img/portfolio/2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/5.JPG" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Angkatan2021</h4>
          <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/6.JPG" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>CIMOL</h4>
          <a href="assets/img/portfolio/6.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <img src="assets/img/portfolio/4.JPG" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>GDSC</h4>
          <a href="assets/img/portfolio/4.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/1.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Pemuda Advent</h4>
          <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/3.JPG" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>HAAteam</h4>
          <a href="assets/img/blog-post-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default MemoriesSection;
