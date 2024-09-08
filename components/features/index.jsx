import React from 'react';
import FooterOne from '../../layout/footers/footerfive';
import HeaderFive from '../../layout/headers/headerfive';
import HeroSlider from '../elements/hero/heroslider';
import BlogSection from './blog-section';
import FoundationSectionFour from './foundation-section-four';
import ServiceSectionTwo from './service-section-two';
import WorkSection from './work-section';
import PortfolioSlider from '../elements/portfolio/portfolio-slider2';
import TeamSection from './team-section';
import ServiceSectionFive from './service-section-five';
import FaqSectionTwo from './faq-section-two';
import WhatsAppIcon from '../common/whatsapp';
import InstagramSlider from '../elements/instagram/instagram-slider';
import HeroSliderFive from '../elements/hero/hero-slider-five';
import AboutUsSection from '../about/aboutus-section2';


const index = () => {
  return (
    <main>
      <HeaderFive />
      <WhatsAppIcon></WhatsAppIcon>
      <AboutUsSection></AboutUsSection>
      <PortfolioSlider></PortfolioSlider>
  
   
       
      <FooterOne />
    </main>
  );
};

export default index;