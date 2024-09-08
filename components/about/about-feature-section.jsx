import Link from 'next/link';
import React from 'react';

const AboutFeatureSection = () => {
    return (
        <div className="section strategy-area pb-90">
            <div className="container">
                <div className="strategy-wrapper">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/B1.jpg)" }}>
                                        <p style={{fontSize:"14px"}}>Trust is built on a solid business relationship. That is why it is important to us that our target customers are processors of leather and PVC. We are looking for customers in the field of textile processing in Ghana. Smaller customers are also important to us, so we can create the same market advantage for everyone. Thanks to our future location in Kumasi, we will also be able to supply private customers with our materials.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/mission-icon.png" alt="" />
                                </div>
                                <h4>our tARGET CUSTOMERS</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/B2.jpg)" }}>
                                        <p>Our main location is Germany - North Rhine-Westphalia. From there, our company is controlled and managed by our outstanding employees. Our second branch will be in Ghana Kumasi from 09/2023. There we offer our customers a large sales area and all-round supply.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/vision-icon.png" alt="" />
                                </div>
                                <h4>our locations</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/B3.jpeg)" }}>
                                        <p>The delivery route is Germany - Ghana.
Thanks to our logistics, which are structured in Ghana, we are able to supply our customers with their material within a few weeks. The delivery time is therefore two to a maximum of 3 weeks.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/approach-icon.png" alt="" />
                                </div>
                                <h4>our delivery times</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeatureSection;