import React from 'react';

import { FooterOverlay, Newsletter} from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';


{/**the footer component */}
const Footer = () => (
  <div className='app__footer section__padding'>

    {/**the newsletter part,*/}
    <FooterOverlay />
    <Newsletter />
     {/**the footer part */}
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
           <h1 className='app__footer-headtext'>Contact Us</h1>
           <p className="p__opensans">ojuelegba Lagos Nigeria</p>
           <p className="p__opensans">+23490543217645</p>
           <p className="p__opensans">+2348090754653</p>
      </div>
      <div className='app__footer-links_logo'>
         <img src={images.gericht} alt='footer_logo'/>
         <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rerum.</p>
         <img src={images.spoon} alt='spoon' className='spoon__image' style={{marginTop: '15px'}} />
         <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
         </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
           <p className="p__opensans">Monday-Fridays </p>
           <p className="p__opensans">08:00am - 12:00am</p>
           <p className="p__opensans">Saturday-Sunday </p>
           <p className="p__opensans">07:00am - 11:00pm </p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className="p__opensans">2021 Gericht.All right Reserved.</p>
    </div>
  </div>
);

export default Footer;
