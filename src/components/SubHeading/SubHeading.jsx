import React from 'react';

import { images } from '../../constants';
 

 {/** this is subheading components 
 that is use on every section/ component heading  */}
const SubHeading = ({ title }) => (
  <div style={{marginBottom: '1rem'}}>
    <p className="p__subheading">{title}</p>
    <img src={images.spoon} alt='spoon' className='spoon__img'/>
  </div>
);

export default SubHeading;
