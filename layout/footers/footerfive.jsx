import Link from 'next/link';
import React from 'react';

const FooterFive = () => {
    return (
        <footer className="footer5-bg">
           
            <div className="copyright-area copyright5-area">
                <div className="container">
                    <div className="copyright5-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 order-lg-1">
                                <div className="footer-links">
                                   
                                    <Link href="/impressum"><a>Impressum</a></Link>
                                    <Link href="/datenschutz"><a>Datenschutz</a></Link>


                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 order-lg-3">
                                <div className="footer-social">
                                   {/*  <div className="social-links">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 order-lg-2">
                                <div className="copyright-text copyright5-text">
                                    © 2024 <a href="https://themeforest.net/user/bdevs/portfolio">Bauingenious</a>. All Rights Reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFive;