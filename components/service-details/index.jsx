import React from 'react';
import ServicesList from '../../data/services-data';
import FooterOne from '../../layout/footers/footerfive';
import HeaderOne from '../../layout/headers/headerfive';
import ServiceDetailsArea from './service-details-area';
import FeatureSectionFour from '../service/feature-section-four';


const item = ServicesList[0]

const index = () => {
    return (
        <main>
            <HeaderOne />
            <ServiceDetailsArea item={item} />
            <FooterOne />
        </main>
    );
};

export default index;