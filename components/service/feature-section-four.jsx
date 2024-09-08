import Link from 'next/link';
import React from 'react';
import BrandSliderTwo from '../elements/brand/brand-slider-two';

const FeatureSectionFour = () => {
   return (
      <section className="features-area style-4">
         <div className="features-title-area style-4">
            <div className="container">
               <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-lg-8">
                     <div className="section-title style-4 features-section-title text-center">
                        <h2 className="section-main-title mb-45">Preisbeispiele</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="features-wrapper style-4">
               <div className="row wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-lg-6">
                     <div className="single-feature style-4 mb-30">
                        <div className="single-feature-inner">
                          
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/service"><a>Paket 1</a></Link>
                                 </h4>
                                 <div className="feature-offers">
                                    <ul>
                                       <li> Raumgröße von 3 - 4 m²</li>
                                       <li>Dusche, Waschtisch, WC</li>
                                       <li>Aufputz-Armaturen und günstige Fliesen</li>
                                       <li> Nur Montage, keine Installation von Leitungen</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/service"><a className="fill-btn">ab 6.000 €<i className="fal fa-long-arrow-right"></i></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="single-feature style-4 mb-30">
                        <div className="single-feature-inner">
                          
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/service"><a>Paket 2</a></Link>
                                 </h4>
                                 <div className="feature-offers">
                                    <ul>
                                       <li>Raumgröße von ca. 5 m²</li>
                                       <li>Dusche mit Glas-Abtrennung, Waschtisch und WC</li>
                                       <li>Standard-Armaturen und klassische Fliesen</li>
                                       <li>Demontage, Installations- und Malerarbeiten, neue Leitungen</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/service"><a className="fill-btn">ab 10.000 €<i className="fal fa-long-arrow-right"></i></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="single-feature style-4 mb-30">
                        <div className="single-feature-inner">
                          
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/service"><a>Paket 3</a></Link>
                                 </h4>
                                 <div className="feature-offers">
                                    <ul>
                                       <li>Raumgröße von ca. 7 m²</li>
                                       <li>Edle Dusche, Wanne und Doppelwaschtisch</li>
                                       <li>Hochwertige Unterputz-Armaturen und Fliesen</li>
                                       <li>Umfangreiche Arbeiten, neue Sanitär- und Elektroleitungen</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/service"><a className="fill-btn">ab 15.000 €<i className="fal fa-long-arrow-right"></i></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div> <div className="col-lg-6">
                     <div className="single-feature style-4 mb-30">
                        <div className="single-feature-inner">
                          
                           <div className="features-content">
                              <div className="features-text">
                                 <h4 className="feature-title">
                                    <Link href="/service"><a>Paket 4</a></Link>
                                 </h4>
                                 <div className="feature-offers">
                                    <ul>
                                       <li>Raumgröße ab 12 m²</li>
                                       <li>Freistehende Wanne, Design-Waschtisch, Dampfbad</li>
                                       <li>Design-Armaturen und edle, großformatige Fliesen</li>
                                       <li>Komplettsanierung inkl. umfassendem Lichtkonzept</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="feature-btn">
                                 <Link href="/service"><a className="fill-btn">ab 25.000 €<i className="fal fa-long-arrow-right"></i></a></Link>
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

export default FeatureSectionFour;