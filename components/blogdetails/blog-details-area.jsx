
import React from 'react';
import Breadcrumb from '../common/breadcrumb';



const BlogDetailsArea = ({ item }) => {
   return (
      <>
         <Breadcrumb breadTitle={'blog'}  breadHome={'Home'} breadMenu={'blog'} />

         <section className="blog-area pt-120 pb-60">
            <div className="container">
               <div className="row wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-xl-9 col-lg-8 col-md-12">
                     <div className="blog-details-wrapper mb-60">
                        <div className="blog-single-details">
                           <div className="blog-meta-list">
                              
                        
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    {item.date}
                                 </div>
                              </div>
                           </div>
                         
                           <div className="blog-thumb">
                              <img src={item.img} alt="" />
                           </div>
                           <h3>{item.title}</h3>
                           <p className="pb-50"> {item.text} </p>
                          
                       
                           
                           
                           <div className="hr-1"></div>
                        
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-8">
                    
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;