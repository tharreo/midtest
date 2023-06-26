import React from "react";
import "../../assets/css/style.css";

function ServicesSection() {
  return (
    <div id="services">
      <div classname="container">
        <div
          classname="services-slider swiper"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div classname="swiper-wrapper">
            <div classname="swiper-slide">
              <div classname="services-block">
                <i classname="bi bi-briefcase" />
                <span>Semester 1</span>
                <p classname="separator">Online Class</p>
              </div>
            </div>
            {"{"}/* End testimonial item */{"}"}
            <div classname="swiper-slide">
              <div classname="services-block">
                <i classname="bi bi-binoculars" />
                <span>Semester 2</span>
                <p classname="separator">Akhirnya masuk kampus</p>
              </div>
            </div>
            {"{"}/* End testimonial item */{"}"}
            <div classname="swiper-slide">
              <div classname="services-block">
                <i classname="bi bi-brightness-high" />
                <span>Semester 3</span>
                <p classname="separator">Sudah jadi kakak tingkatt yayy</p>
              </div>
            </div>
            {"{"}/* End testimonial item */{"}"}
            <div classname="swiper-slide">
              <div classname="services-block">
                <i classname="bi bi-calendar4-week" />
                <span>Semester 4</span>
                <p classname="separator">Kuliah mulai berat :(</p>
              </div>
            </div>
            {"{"}/* End testimonial item */{"}"}
          </div>
          <div classname="swiper-pagination" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
