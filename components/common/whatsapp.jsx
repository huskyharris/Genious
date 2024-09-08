import React from 'react';

import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppIcon = () => {
  const handleClick = () => {
    window.open('https://wa.me/+4917624329949', '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={handleClick}>
      <IoLogoWhatsapp style={{zIndex:"100" , color:"#25D366" , fontSize:"80px" , position:"fixed" , top:"650px"  }}></IoLogoWhatsapp>
    </div>
  );
};

export default WhatsAppIcon;