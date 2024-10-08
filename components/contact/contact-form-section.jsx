import React from 'react';

const ContactFormSection = () => {
    return (
        <section className="contact-area pt-120">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="contact-wrapper">
                            <div className="contact-wrapper-content">
                                <div className="section-title">
                                    <h2 className="section-main-title mb-35">Kontaktiere Uns</h2>
                                </div>
                                <div className="contact-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Enter full name"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-email">
                                                    <input type="text" placeholder="email address"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <textarea name="message" id="message" placeholder="message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-btn">
                                            <button type='submit' className="fill-btn"><i className="fal fa-farm"></i><span>Senden</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-wrapper-img">
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;