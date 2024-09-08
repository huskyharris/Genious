import React from 'react';

const FaqSectionTwo = ({faq_area}) => {
    return (
        <div className={` ${faq_area ? faq_area : 'faq-area style-3 pt-120 pb-60'}`}>
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="faq-img mb-60">
                     <img src="/assets/img/about/AB1.jpg" alt=""/>
                     <div className="faq-thumb">
                        <img src="/assets/img/logo/M.png" alt=""/>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="section-title style-2">
                     <span className="section-subtitle">[ faq ]</span>
                     <h2 className="section-main-title mb-55">some questions</h2>
                  </div>
                  <div className="faq-wrapper mb-60">
                     <div className="gm-faq">
                        <div className="accordion" id="accordionExample-st-2">
                           <div className="gm-faq-group">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingOne-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne-st-2" aria-expanded="false"
                                       aria-controls="collapseOne-st-2">
                                       What is PVC?
                                    </button>
                                 </h2>
                                 <div id="collapseOne-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingOne-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    PVC stands for polyvinyl chloride, which is a synthetic plastic polymer. It is commonly used in construction, packaging, and consumer goods.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingTwo-st-2">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTwo-st-2" aria-expanded="true"
                                       aria-controls="collapseTwo-st-2">
                                       What is leather?
                                    </button>
                                 </h2>
                                 <div id="collapseTwo-st-2" className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    Leather is a material made from the skin of animals, usually cows, sheep, or goats. It is commonly used in the fashion industry, as well as in furniture, automotive interiors, and other applications.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingThree-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseThree-st-2" aria-expanded="false"
                                       aria-controls="collapseThree-st-2">
                                       What are some common uses of PVC and leather?
                                    </button>
                                 </h2>
                                 <div id="collapseThree-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    PVC is commonly used in pipes, flooring, and consumer goods such as toys and shower curtains. Leather is commonly used in fashion and accessories, furniture, and automotive interiors.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingFour-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour-st-2" aria-expanded="false"
                                       aria-controls="collapseFour-st-2">
                                       Can PVC and leather be recycled?
                                    </button>
                                 </h2>
                                 <div id="collapseFour-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    Yes, both PVC and leather can be recycled. However, the recycling process for PVC can be difficult due to the presence of additives and contaminants, while leather recycling is still in its early stages of development.
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
      </div>
    );
};

export default FaqSectionTwo;