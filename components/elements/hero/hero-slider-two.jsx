import Link from 'next/link';
import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const HeroSliderTwo = () => {

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/B4.jpg',
            sliderTitle: 'Innovatives Bauen.',
            sliderDesc: 'Bauen mit Integrität, Ingenieurwesen mit Leidenschaft.',
            slidereviewImg: '/assets/img/banner/meta-review-thumb.png',
            slidereviewText: 'Active Review',
            slidereviewCount: '3200+',
            sliderBtn: 'get in touch',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/B5.jpg',
            sliderTitle: 'Präzision im Bau.',
            sliderDesc: '"Zukunft bauen, Struktur für Struktur."',
            slidereviewImg: '/assets/img/banner/meta-review-thumb.png',
            slidereviewText: 'Active Review',
            slidereviewCount: '3200+',
            sliderBtn: 'get in touch',
        },
      
    ];

    return (
        <div className="banner-area banner-area2 pos-rel">
            <div className="swiper-container slider__active">
                {SliderItem &&
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                        >
                            {SliderItem.map((item, num) => (
                                <SwiperSlide key={num}>
                                    <div className="swiper-slidess">
                                        <div className="single-banner single-banner-2 banner-850 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg2 banner-bg2-1" style={{ backgroundImage: `url(${item.sliderBg})`}}>
                                            </div>
                                            <div className="container pos-rel">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="banner-content banner-content2 banner-content2-1">
                                                            <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                                <span>{item.sliderSubtitle}</span>
                                                            </div>
                                                            <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">{item.sliderTitle}</h1>
                                                            <div className="banner-text" data-animation="fadeInUp" data-delay=".7s">
                                                                <p>{item.sliderDesc}</p>
                                                            </div>
                                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".9s">
                                                                <div className="banner-meta-review">
                                                                    <div className="meta-review-thumb">
                                                                        <img src={item.slidereviewImg} alt="" />
                                                                    </div>
                                                                   
                                                                </div>
                                                                <Link href="/contact"><a className="fill-btn-rounded">{item.sliderBtn} <i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                }
            </div>
        </div>
    );
};

export default HeroSliderTwo;