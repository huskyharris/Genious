import React from 'react';

import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppIcon = () => {
  const handleClick = () => {
     window.open('https://wa.me/+4915771426549', '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={handleClick}>
      <div className='border bg-red-500 z-100' style={{zIndex:"100" , backgroundColor:"#25D366" , fontSize:"60px" , position:"fixed" , top:"200px" ,right:"0"  }}>
      <IoLogoWhatsapp style={{zIndex:"100" , color:"white" , fontSize:"50px"   }}></IoLogoWhatsapp>
      </div>
    </div>
  );
};

export default WhatsAppIcon;