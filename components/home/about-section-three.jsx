import React from "react";

const AboutSectionThree = () => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="about-tab-wrapper">
          <div className="about-tab-nav mb-0 wow fadeInUp" data-wow-delay=".3s">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <div
                  className="nav-link active"
                  id="nav-1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-1"
                  role="tab"
                  aria-controls="nav-1"
                  aria-selected="true"
                >
                  <span className="tab-number"></span>Badsanierung
                  <i className="flaticon-home"></i>
                </div>
                <div
                  className="nav-link"
                  id="nav-2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-2"
                  role="tab"
                  aria-controls="nav-2"
                  aria-selected="false"
                >
                  <span className="tab-number"></span>Abdichtungstechnik
                  <i className="flaticon-working"></i>
                </div>
              </div>
            </nav>
          </div>
          <div className="about-tab-content wow fadeInUp" data-wow-delay=".3s">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-1"
                role="tabpanel"
                aria-labelledby="nav-1-tab"
              >
                <div className="about-service-wrapper">
                  <div className="about-service-bg">
                    <img src="/assets/img/bg/about-service-bg.png" alt="" />
                  </div>
                  <div className="row gx-0 align-items-center">
                    <div className="col-lg-6">
                      <div className="service-tab-content">
                        <div className="section-title style-3">
                          <h2 className="section-main-title mb-20 color-x">
                            BAUINGENIOUS BIETET KOMPLETTLÖSUNGEN
                          </h2>
                        </div>
                        <p>
                          Bauingenious bietet Ihnen umfassende Lösungen für Ihre
                          Badsanierung. Von der Planung bis zur Umsetzung
                          vereinen wir technisches Know-how mit einem klaren
                          Verständnis für Ihre ästhetischen und funktionalen
                          Anforderungen. Egal ob Modernisierung, barrierefreie
                          Badgestaltung oder Komplettsanierung – wir garantieren
                          höchste Qualität und Präzision bei jedem Schritt.
                        </p>
                        <div className="service-tab-point">
                          <i className="fal fa-check "></i>
                          <p>
                            Höchste Standards in Professionalität und
                            Integrität.
                          </p>
                          <i className="flaticon-garden-1 backside-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="service-tab-img">
                        <img
                          src="/assets/img/service/service-tab-img.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-2"
                role="tabpanel"
                aria-labelledby="nav-2-tab"
              >
                <div className="about-service-wrapper">
                  <div className="about-service-bg">
                    <img src="/assets/img/bg/about-service-bg.png" alt="" />
                  </div>
                  <div className="row gx-0 align-items-center">
                    <div className="col-lg-6">
                      <div className="service-tab-content">
                        <div className="section-title style-3">
                          <h2 className="section-main-title color-x  mb-20">
                          Abdichtungstechnik mit Bauingenious
                          </h2>
                        </div>
                        <p>
                        Mit Bauingenious sind Sie bestens geschützt. Unsere Experten für Abdichtungstechnik bieten Ihnen maßgeschneiderte Lösungen gegen Feuchtigkeit und Wasserschäden. Ob Kellerabdichtung, Flachdachabdichtung oder Fassadenschutz – wir sorgen dafür, dass Ihr Gebäude sicher und dauerhaft geschützt bleibt. Vertrauen Sie auf unsere Erfahrung und modernste Technologien für zuverlässige Abdichtungslösungen.
                        </p>
                        <div className="service-tab-point">
                          <i className="fal fa-check"></i>
                          <p>
                          Höchste Standards in Qualität und Langlebigkeit
                          </p>
                          <i className="flaticon-garden-1 backside-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="service-tab-img ">
                        <img
                          src="/assets/img/service/service-tab2-img.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionThree;
