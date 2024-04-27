import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiWhatsappLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <IoLogoWhatsapp />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
