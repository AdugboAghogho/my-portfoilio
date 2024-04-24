import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiWhatsappLine } from "react-icons/ri";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <RiWhatsappLine />
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
