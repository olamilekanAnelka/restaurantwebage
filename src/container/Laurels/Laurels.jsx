import React from 'react';

import { SubHeading} from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

  /* this is the award imgs this is maped from*/
  const AwardCard = ({ award: {imgUrl, title, subtitle}}) => (
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt="award" />
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{color: '#DCCA*&'}}>{title}</p>
        <p className='p__cormorant' >{subtitle}</p>
      </div>
    </div>
  )


  {/** the laurel component */}
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awaeds'>
    {/**the first part of the laurel component */}
    <div className='app__wrapper_info'>
       <SubHeading title="Awards & Recongnition"/>
       <h1 className='headtext__cormorant'>Our Laurels</h1>

       <div className="app__laurels_awards">
         {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
       </div>
    </div>

    {/**the second part of the laurel component */}
    <div className='app__wrapper_img'>
    <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;
