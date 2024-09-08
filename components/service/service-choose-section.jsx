import React from 'react';

const ServiceChooseSection = () => {
    return (
        <section className="choose-area pt-120 pb-120">
            <div className="choose-bg">
                <img src="/assets/img/bg/B5.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-end wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="choose-wrapper">
                            <div className="choose-inner">
                                <div className="choose-content">
                                    <div className="section-title">
                                        <span className="section-subtitle">why choose us</span>
                                        <h2 className="section-main-title mb-35">iNFO</h2>
                                    </div>
                                    <div className="choose-list">
                                        <div className="irc-item choose-item">
                                            <div className="irc-item-icon">
                                                <img src="/assets/img/icon/choose-icon1.png" alt="" />
                                            </div>
                                            <div className="irc-item-content">
                                                <h4>Our Materials and How We Use Them</h4>
                                                <p>Our material is of high quality, with the genuine leather being delivered to Ghana in blanks for further processing and the PVC in rolls.

The material is used in the automotive industry as a cover for car seats and more, as well as for leather bags, belts, sofa covers and much more.</p>
                                            </div>
                                        </div>
                                        <div className="irc-item choose-item">
                                            <div className="irc-item-icon">
                                                <img src="/assets/img/icon/choose-icon2.png" alt="" />
                                            </div>
                                            <div className="irc-item-content">
                                                <h4>price lists</h4>
                                                <p>Our real leather is sold per kg, whereby the PVC is calculated according to m2.
The price per kg or m2 depends on the amount of purchase and the type of customer. In order to ensure fair market conditions, we sell to dealers and processors, who in turn can process their material at a profit and sell it to the end customer. Upon request, we can readily communicate our prices to a prospective customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceChooseSection;