import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="about-area pt-120 pb-90">
    <div className="container">
      <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
        <div className="col-lg-6">
          <div className="about-thumb mb-30">
            <video
              autoPlay
              loop
              muted
              style={{
                maxHeight: "400px",
                objectFit: "contain",
                borderRadius: "30px",
              }}
              src="/assets/img/pjo/12.mp4"
              alt=""
            />
            <div className="about-thumb-meta">
              <p>since from 2022</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content mb-30">
            <div className="section-title">
              <span className="section-subtitle">Exciting News</span>
              <h2 className="section-main-title mb-20">
                Our Container Arrives in Ghana on November 9th!
              </h2>
            </div>
            <p className="mb-30">
              We are thrilled to announce that on November 9th, our eagerly
              awaited container will be arriving in Ghana, packed with 22
              tonnes of high-quality PVC. This shipment is a testament to our
              commitment to delivering top-notch products to our valued
              customers in Ghana and beyond.
            </p>
            <h3>Key Details:</h3>
            <ul>
              <li>Container Arrival Date: November 9th, 2023</li>
              <li>Total PVC Quantity: 22 tonnes</li>
              <li>Composition: 80% black PVC, 20% vibrant colors</li>
            </ul>
            <br></br>
            <p>
              Our black PVC is renowned for its durability, versatility, and
              reliability. Its perfect for a wide range of applications,
              whether youre in the construction, manufacturing, or industrial
              sector. Additionally, our vibrant colored PVC adds a creative
              touch to your projects, allowing you to stand out from the
              crowd.
            </p>
            <p>
              We cant wait to provide you with the PVC solutions you need for
              your projects in Ghana. Thank you for choosing MkFabrics as your trusted partner.
            </p>

            <div className="about-btn">
              <Link href="/contact">
                <a className="fill-btn">
                  get in touch<i className="fal fa-angle-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutUsSection;
