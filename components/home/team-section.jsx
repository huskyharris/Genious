import Link from 'next/link';
import React from 'react';
import TeamList from '../../data/team-data';

const TeamSection = () => {
    return (
        <div className="team-area style-4 pt-120 pb-155 bg-white">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-4 text-center">
                     <h2 className="section-main-title mb-45 color-x">Das Team</h2>
                  </div>
               </div>
            </div>
            <div className="team-wrapper hover-img-border wow fadeInUp" data-wow-delay=".3s">
            {TeamList &&
               <div className="row">
                {TeamList.slice(0, 7).map((item, num) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 flex  " key={num}>
                     <div className="team-single style-4 mb-30">
                        <div className="team-member-wrapper  justify-content-center" style={{display:"flex"}}>
                           <div>
                           <div className="member-img">
                              <a><img src={item.teamImg} alt=""/></a>
                           </div>
                           <div className="member-content" >
                              <span className="member-designation">{item.teamSubtitle}</span>
                              <h4 className="member-name"><a>{item.teamTitle}</a></h4>
                              {/* <div className="social-links team-social">
                                 <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 </ul>
                              </div> */}
                           </div></div>
                           <div>

                              <span><a style={{padding:"30px 5px 1px 3px " , fontStyle:"italic" , marginTop:"20px"}}>{item.text}</a></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
            }
            </div>
         </div>
      </div>
    );
};

export default TeamSection;