import React from "react";

const ContactMapSection = () => {
  return (
    <section className="contact-info-area">
      <div className="container">
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span className="section-subtitle">contact</span>
              <h2 className="section-main-title mb-45">get in touch</h2>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          <div className="col-lg-4">
            <div className="contact-map">
                <iframe
                  width="100%"
                  height="600"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bozener%20str.33%20moenchengladbach+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
          
              {/* <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Siepensteg%2013%20-%2020%20in%2041065%20M%C3%B6nchengladbach+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-item-wrapper info-wrapper-media">
              <h4 className="contact-info-title">Zentrale</h4>
              <div className="info-contact">
                <ul>
                  <li>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      {/* <p><a href="tel:+49 179 1132627">+49 179 1132627</a>  </p> */}
                    </div>
                  </li>
                  <li>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fas fa-envelope-open"></i>
                      </div>
                      <p>
                        <a href="mailto:info@bauingenious-service.de">
                        nfo@bauingenious-service.de
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="fas fa-map-marked-alt"></i>
                      </div>
                      <p style={{ display: "flex", flexDirection: "column" }}>
                        <a href="#">Bozener Str.33 </a>
                        <a href="#">41063 Mönchengladbach </a>
                        <a href="#">Deutschland</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-item-wrapper info-wrapper-time">
              <h4 className="contact-info-title">Öffnungszeiten</h4>
              <div className="info-contact-time">
                <ul>
                  <li>
                    <div className="info-date">
                      <span>Mon - Son</span>
                      <span>9:00 - 17:00 pm</span>
                    </div>
                  </li>
                  <li>
                    <div className="info-date">
                      <span style={{ fontSize: "14px" }}>
                        Ihre Anfragen werden innerhalb von 24 Stunden
                        bearbeitet. Kommunizieren Sie bequem über WhatsApp und
                        stellen Sie dort Ihre Anfragen. Wir sind auch über
                        unsere E-Mail-Adresse erreichbar. Wir freuen uns auf
                        Sie.
                      </span>
                    </div>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
