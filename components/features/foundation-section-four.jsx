import Link from 'next/link';
import React from 'react';

const FoundationSectionFour = () => {
    return (
        <section className="foundation-area style-2 pt-0 pb-60 mt-20">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="foundation-img style-2 mb-60">
                     <div className="row align-items-center">
                        <div className="col-6">
                           <img className="foundation-2-img1" src="/assets/img/about/P1.jpeg" alt="img"/>
                        </div>
                        <div className="col-6">
                           <div className="row">
                              <div className="col-12">
                                 <img className="foundation-2-img2" src="/assets/img/about/P2.jpeg" alt="img"/>
                              </div>
                              <div className="col-12">
                                 <img className="foundation-2-img3" src="/assets/img/about/P3.jpeg" alt="img"/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="foundation-content style-2 mb-60">
                     <div className="section-title">
                        <span className="section-subtitle">since from 2022</span>
                        <h2 className="section-main-title mb-20">Mk fabrics</h2>
                     </div>
                     <p>An innovative company with opportunities. With our in-depth knowledge of materials, we give you the advantage. We are quick to process and flexible. Our company specializes in supplying high quality genuine leather and PVC. We obtain our material exclusively from Europe. Our genuine leather has its origins in cow, goat, lamb and calf. A team made up of an engineer and a textile manager give our customers security and a market advantage. Our prices are calculated in line with the market, so that our partners and dealers in Gahna can make ample profits.</p>
                     <div className="founder-meta mt-45">
                        <div className="founder-info-meta">
                           <div className="founder-img">
                              <img src="/assets/img/team/TS1.jpeg" alt=""/>
                           </div>
                           <div className="founder-desciption">
                              <span className="designation">(M.Sc.) Industrial engineer</span>
                              <h4 className="founder-name">n</h4>
                           </div>
                        </div>
                        <Link href="/contact"><a className="fill-btn-rounded">get in touch<i className="fal fa-angle-right"></i></a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default FoundationSectionFour;