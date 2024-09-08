import React from 'react';
import FooterOne from '../../layout/footers/footerfive';
import HeaderOne from '../../layout/headers/headerfive';
import Breadcrumb from '../common/breadcrumb';
import ContactFormSection from './contact-form-section';
import ContactMapSection from './contact-map-section';
import HeaderTwo from '../../layout/headers/headertwo';


const index = () => {
    return (
        <main>
            <HeaderTwo />
            <Breadcrumb breadTitle={'Kontakt'} breadSubtitle={''} breadHome={'Home'} breadMenu={'Kontakt'} />
            <ContactFormSection />
            <ContactMapSection />
            <FooterOne />
        </main>
    );
};

export default index;