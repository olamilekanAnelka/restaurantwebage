import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading} from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImgs = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
 /* functionality of the arrow*/
  const scrollRef = React.useRef(null);

  const scroll= (direction) => {
    const {current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft  += 300;
    }
  }
  

  {/**the gallery component  */}
  return(

    
  <div className='app__gallery flex__center'>

    {/** the gallery content the first part  */}
    <div className='app__gallery-content'>
     <SubHeading title="instagram" />
     <h1 className='headtext__cormorant'> Photo Gallery </h1>
     <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
       Omnis iure culpa reiciendis accusamus, quod illum libero accusantium!
     </p>
     <button type='button' className='custom__button'>View More</button>
    </div>

    {/**the carousel paet  */}
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
         {galleryImgs.map((images, index) => (
          <div className='app__gallery-images_card flex__center'key={'gallery__image-${index + 1}'}>
              <img src={images} alt='gallery' />
              <BsInstagram  className='gallery__image-icon'/>
           </div>
         ))}
      </div>
    
    {/**the arrow on the caroesel */}
    <div className='app__gallery-images_arrows'>
      <BsArrowLeftShort className='gallery__arrow-icon' onClick={ () => scroll('left')} />
      <BsArrowRightShort className='gallery__arrow-icon' onClick={ () => scroll('right')} />
    </div>
  </div>
  </div>
  );
};

export default Gallery;
