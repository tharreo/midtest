import React from "react";
import "../../assets/css/style.css";
import pic3 from "../assets/img/3.jpg";

function AboutSection() {
  return (
    <div id="about" classname="paddsection">
      <div classname="container">
        <div classname="row justify-content-between">
          <div classname="col-lg-4">
            <div classname="div-img-bg">
              <div classname="about-img">
                <img src={pic3} classname="img-responsive" alt="me" />
              </div>
            </div>
          </div>
          <div classname="col-lg-7">
            <div classname="about-descr">
              <p classname="separator">
                Saya mahasiswa Universitas Klabat yang telah menempuh 4 semester
                yang aktif, kerja keras, terbuka, fokus pada hasil, kreatif, dan
                fleksibel. Saya suka terlibat dalam kegiatan di luar kuliah
                seperti organisasi mahasiswa, seminar, dan lokakarya. Saya
                selalu berusaha keras dalam prestasi akademik dan memiliki
                kemampuan manajemen waktu yang baik. Saya senang menerima ide
                baru dan bekerja sama dengan tim. Saya juga punya orientasi pada
                hasil dan siap menghadapi tantangan. Secara keseluruhan, saya
                mahasiswa yang proaktif, kerja keras, terbuka, fokus pada hasil,
                kreatif, dan fleksibel..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
