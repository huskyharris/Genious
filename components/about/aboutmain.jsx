import React from 'react';
import FooterOne from '../../layout/footers/footerfive';
import HeaderOne from '../../layout/headers/headerfive';
import Breadcrumb from '../common/breadcrumb';
import ContactMapSection from '../contact/contact-map-section';
import AboutFeatureSection from './about-feature-section';
import AboutUsSection from './aboutus-section';
import HeaderTwo from '../../layout/headers/headertwo';


const AboutMain = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadTitle={'über uns'} breadSubtitle={''} breadHome={'Home'} breadMenu={'über uns'} />
                <AboutUsSection />
                <ContactMapSection></ContactMapSection>
               
            </main>
            <FooterOne />
        </>
    );
};

export default AboutMain;