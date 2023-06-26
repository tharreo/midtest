import React from "react";
import "../../assets/css/style.css";

function ContactSection() {
  return (
    <div id="contact" classname="paddsection">
      <div classname="container">
        <div classname="contact-block1">
          <div classname="row">
            <div classname="col-lg-6">
              <div classname="contact-contact">
                <h2 classname="mb-30">GET IN TOUCH</h2>
                <ul classname="contact-details">
                  <li>
                    <span>Kaima, Kec.Kauditan</span>
                  </li>
                  <li>
                    <span>Minahasa Utara</span>
                  </li>
                  <li>
                    <span>+62 5823551866</span>
                  </li>
                  <li>
                    <span>faithmasjuri@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div classname="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                classname="php-email-form"
              >
                <div classname="row gy-3">
                  <div classname="col-lg-6">
                    <div classname="form-group contact-block1">
                      <input
                        type="text"
                        name="name"
                        classname="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div classname="col-lg-6">
                    <div classname="form-group">
                      <input
                        type="email"
                        classname="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div classname="col-lg-12">
                    <div classname="form-group">
                      <input
                        type="text"
                        classname="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div classname="col-lg-12">
                    <div classname="form-group">
                      <textarea
                        classname="form-control"
                        name="message"
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div classname="col-lg-12">
                    <div classname="loading">Loading</div>
                    <div classname="error-message" />
                    <div classname="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div classname="mt-0">
                    <input
                      type="submit"
                      classname="btn btn-defeault btn-send"
                      defaultValue="Send message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
