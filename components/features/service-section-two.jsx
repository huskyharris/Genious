import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSectionTwo = () => {
    return (
        <section className="services-area pt-200 pb-60">
            <div className="services-title-bg">
                <video style={{objectPosition:"bottom left"}} autoPlay loop muted src="/assets/img/vid1.mp4" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title style-2 text-center services-title-style-2">
                            <span className="section-subtitle">[ <span>services</span> ]</span>
                            <h2 className="section-main-title mb-45">What we provide</h2>
                        </div>
                    </div>
                </div>
                <div className="services-wrapper pb-10 wow fadeInUp" data-wow-delay=".3s">
                    {ServicesList &&
                        <div className="row">
                            {ServicesList.slice(4, 7).map((item, num) => (
                                <div className="col-lg-4 col-md-6" key={num}>
                                    <div className="single-service single-service-default mb-30">
                                        <div className="service-icon">
                                           
                                        </div>
                                        <div className="single-service-content">
                                            <span className="service-number"></span>
                                            <h4 className="service-title"><a>{item.serviceTitle}</a></h4>
                                            <p>{item.serviceDesc}</p>
                                          
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div className="services-action-wrapper style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-action-bg-shape">
                        <img src="/assets/img/shape/pattern-1270.png" alt="" />
                    </div>
                    <h3>Get a quote today for our services and discover how we can meet your needs.</h3>
                    <Link href="/contact"><a className="fill-btn-rounded"><span>Get a Quote</span></a></Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionTwo;