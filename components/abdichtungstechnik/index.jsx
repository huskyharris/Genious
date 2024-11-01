import React from "react";
import ServicesList from "../../data/services-data";
import FooterOne from "../../layout/footers/footerfive";
import HeaderOne from "../../layout/headers/headerfive";
import ServiceDetailsArea from "./abdichtungs";
import FeatureSectionFour from "../service/feature-section-four";
import Abdichtungs from "./abdichtungs";
import HeaderTwo from "../../layout/headers/headertwo";

const item = ServicesList[0];

const index = () => {
  return (
    <main>
      <HeaderTwo />
      <Abdichtungs></Abdichtungs>
      <FooterOne />
    </main>
  );
};

export default index;
