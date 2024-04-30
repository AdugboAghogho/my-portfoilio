import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiWhatsappLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";


const SocialMedia = () => { 
  
  const handleWhatsappClick = () => {
    // Replace with the deep link URL for WhatsApp (if available)
    window.location.href = 'your-whatsapp-deep-link-here';
  };
  const handleFacebookClick = () => {
    // Replace with the deep link URL for Facebook (if available)
    window.location.href = 'your-facebook-deep-link-here';
  };

  const handleInstagramClick = () => {
    // Replace with the deep link URL for Instagram (if available)
    window.location.href = 'your-instagram-deep-link-here';
  };

  
  return (
    <div className="app__social">
      <div onClick={handleWhatsappClick}>
        <IoLogoWhatsapp />
      </div>
      <div onClick={handleFacebookClick}>
        <FaFacebookF />
      </div>
      <div onClick={handleInstagramClick}>
        <BsInstagram />
      </div>
    </div>
  );

};

export default SocialMedia;
