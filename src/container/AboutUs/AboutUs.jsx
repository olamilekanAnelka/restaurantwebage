import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';



  {/**the aboutus component
    the component is consit of three div the aboutus,img and our history */}
const AboutUs = () => (
  <div className='app__aboutsus app__bg flex__center section__padding' id='about'>

    {/**this is the bg img with letter G */}
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    {/**the parent to the three div */}
    <div className="app__aboutus-content flex__center">

      {/**the div 1 AboutUs */}
        <div className="app__aboutus-content_about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon"  className='spoon__img'/>
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ipsum natus,
             vel quo quaerat neque delectus debitis eius ipsam vitae?
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        {/**the second div the Knife img */}
     <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt='about_knife' />

     </div>
         

         {/**the third div OurHistory */}
     <div className="app__aboutus-content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon"  className='spoon__img'/>
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ipsum natus,
             vel quo quaerat neque delectus debitis eius ipsam vitae?
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

    </div>
  </div>
);

export default AboutUs;
