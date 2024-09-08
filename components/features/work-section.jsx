import React from 'react';
import { FcConferenceCall, FcInTransit, FcPaid, FcVoicePresentation } from "react-icons/fc";

const WorkSection = () => {

    const workItems = [
        {
            id: 1,
            workImg : <FcConferenceCall style={{fontSize:"48px"}}></FcConferenceCall> ,
            workTitle : 'Consultation',
            workDesc : 'We will work with you to identify your specific needs and goals. This includes discussing your budget, timeline, and any other requirements you may have',
            workClass : 'process-flow-border',
        },
        {
            id: 2,
            workImg : <FcPaid style={{fontSize:"48px"}}/>,
            workTitle : 'Product Sourcing',
            workDesc : ' Once we have a clear understanding of your needs, we will begin sourcing high-quality PVC and leather products from our trusted network of suppliers. We work with suppliers who have a proven track record of providing high-quality products at competitive prices.',
            workClass : 'process-flow-border',
        },
        {
            id: 3,
            workImg : <FcInTransit style={{fontSize:"48px"}}></FcInTransit>,
            workTitle : 'Shipping and Logistics',
            workDesc : 'After we have sourced your products, we will handle all shipping and logistics. We have extensive experience in international trade and will ensure that your products are delivered on time and in perfect condition',
            workClass : 'process-flow-border',
        },
        {
            id: 4,
            workImg : <FcVoicePresentation style={{fontSize:"48px"}}></FcVoicePresentation>,
            workTitle : 'Customer Support',
            workDesc : ' Our commitment to customer support doesnt end with the delivery of your products. We will continue to provide support and guidance to ensure that you are completely satisfied with our services',
            workClass : 'process-flow-border d-none',
        }
    ]
    return (
      <section className="work-process-area process-area-bg pt-120 pb-65">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                     <span className="section-subtitle">work process</span>
                     <h2 className="section-main-title mb-45">how we work</h2>
                  </div>
               </div>
            </div>
            <div className="how-works-wrapper wow fadeInUp" data-wow-delay=".3s">
            {workItems &&
               <div className="working-steps working-steps-2">
                {workItems.map((item, num) => (     
                  <div className="work-step work-step-2" key={num}>
                     <div className={item.workClass}></div>
                     <div className="work-step-icon">
                        {item.workImg} 
                     </div>
                     <h4>{item.workTitle}</h4>
                     <p>{item.workDesc}</p>
                  </div>
                ))}
               </div>
            }
            </div>
         </div>
      </section>
   );
};

export default WorkSection;