import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const InstagramSlider = () => {
    return (
        <div className="instagram-slider-wrappper wow fadeInUp mt-20 mb-45" data-wow-delay=".3s">
         <div className="swiper-container instagram-slider-active">
         <div className="section-title text-center">
                 
                     <h2 className="section-main-title mb-60">Coming Soon</h2>
                  </div>
            <div className="swiper-wrapper">
                <Swiper
                    modules={[ Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                        1400: {
                            slidesPerView: 7,
                        },
                        1600: {
                            slidesPerView: 8,
                        }
                    }}
                    
                >
                <SwiperSlide>
                <div className="swiper-slidess">
                <div className="instagram-shot" style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }}>
                <a href="#"><video autoPlay loop muted  style={{height:"240px"  , objectFit:"contain" ,borderRadius:"30px"}} src="/assets/img/new/k.mp4" alt=""/></a>
                     
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                <div className="instagram-shot" style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }}>
                <a href="#"><video autoPlay loop muted  style={{height:"240px"  , objectFit:"contain" ,borderRadius:"30px" }} src="/assets/img/new/j.mp4" alt=""/></a>
                     
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                <div className="instagram-shot" style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }}>
                <a href="#"><video autoPlay loop muted  style={{height:"240px"  , objectFit:"contain" ,borderRadius:"30px"}} src="/assets/img/new/l.mp4" alt=""/></a>
                     
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                <div className="instagram-shot" style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }}>
                     <a href="#"><video autoPlay loop muted  style={{height:"240px"  , objectFit:"contain" ,borderRadius:"30px"}} src="/assets/img/new/i.mp4" alt=""/></a>
                     
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                <div className="instagram-shot" style={{height:"240px" , width:"135px"   ,borderRadius:"30px" }}>
                     <a href="#"><img style={{objectFit:"fill" ,height:"100%" ,borderRadius:"30px"  }} src="/assets/img/new/h.jpeg" alt=""/></a>
                     
                  </div>
               </div>
                </SwiperSlide>
               
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                <div className="instagram-shot" style={{height:"240px" , width:"135px"   ,borderRadius:"30px" }}>
                     <a href="#"><img style={{objectFit:"fill" ,height:"100%" ,borderRadius:"30px"  }} src="/assets/img/new/e.jpeg" alt=""/></a>
                     
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                <div className="instagram-shot" style={{height:"240px" , width:"135px"   ,borderRadius:"30px" }}>
                     <a href="#"><img style={{objectFit:"fill" ,height:"100%" ,borderRadius:"30px"  }} src="/assets/img/new/d.jpeg" alt=""/></a>
                     
                  </div>
               
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                 
                  <div className="instagram-shot" style={{height:"240px" , width:"135px"   ,borderRadius:"30px" }}>
                     <a href="#"><img style={{objectFit:"fill" ,height:"100%" ,borderRadius:"30px"  }} src="/assets/img/new/c.jpeg" alt=""/></a>
                     
             
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                
                  <div style={{height:"240px" , width:"135px"   ,borderRadius:"30px" }} className="instagram-shot">
                     <a href="#"><img style={{objectFit:"fill" ,height:"100%" ,borderRadius:"30px"  }} src="/assets/img/new/b.jpeg" alt=""/></a>
                     
                  </div>
             
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center",height:"240px" , width:"240px"   ,borderRadius:"30px" }} className="swiper-slidess">
                  <div style={{height:"240px" , width:"135px"   ,borderRadius:"30px" }} className="instagram-shot">
                   <img style={{objectFit:"fill" ,height:"100%" ,borderRadius:"30px"  }} src="/assets/img/new/a.jpeg" alt=""/>
                     
                  </div>
               </div>
                </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
    );
};

export default InstagramSlider;