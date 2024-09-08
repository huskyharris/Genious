import React from 'react';
import FooterOne from '../../layout/footers/footerfive';
import HeaderFive from '../../layout/headers/headerfive';
import HeroSlider from '../elements/hero/heroslider';
import BlogSection from './blog-section';
import FoundationSectionFour from './foundation-section-four';
import ServiceSectionTwo from './service-section-two';
import WorkSection from './work-section';
import PortfolioSlider from '../elements/portfolio/portfolio-slider';
import TeamSection from './team-section';
import ServiceSectionFive from './service-section-five';
import FaqSectionTwo from './faq-section-two';
import WhatsAppIcon from '../common/whatsapp';
import InstagramSlider from '../elements/instagram/instagram-slider';
import HeaderTwo from '../../layout/headers/headertwo';
import HeroSliderTwo from '../elements/hero/hero-slider-two';
import AboutSectionThree from './about-section-three';


const index = () => {
  return (
    <main>
      <HeaderTwo />
      <WhatsAppIcon></WhatsAppIcon>
      <HeroSliderTwo />
      <AboutSectionThree></AboutSectionThree>
      <ServiceSectionTwo/>
  
      <TeamSection />
      <FooterOne />
    </main>
  );
};

export default index;