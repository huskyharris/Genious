import React from 'react';
import FooterOne from '../../layout/footers/footerfive';
import HeaderOne from '../../layout/headers/headerfive';
import Breadcrumb from '../common/breadcrumb';
import ContactMapSection from '../contact/contact-map-section';
import BlogSection from '../home/blog-section';
import FeatureSectionFour from './feature-section-four';
import ServiceChooseSection from './service-choose-section';
import ServiceSectionThree from './service-section-three';
import HeaderTwo from '../../layout/headers/headertwo';
import ServicesSection from './services-section';
import ServiceDetailsArea from '../service-details/service-details-area';



const index = () => {
    return (
        <main>
            <HeaderTwo />
            <ServiceDetailsArea></ServiceDetailsArea>
            <FeatureSectionFour></FeatureSectionFour>

            <FooterOne />
        </main>
    );
};

export default index;