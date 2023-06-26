import React from "react";
import "../../assets/css/style.css";

function Footer() {
  return (
    <div id="footer" classname="text-center">
      <div classname="container">
        <div classname="socials-media text-center">
          <ul classname="list-unstyled">
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
        <p>© Copyrights Folio. All rights reserved.</p>
        <div classname="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
