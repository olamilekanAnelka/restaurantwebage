import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';


{/** the specialmenu component  */}
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    {/** the heading of the component  */}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fit You Palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
      

      
    <div className='app__specialMenu-menu'>
      {/**the first div in the component the wine part */}
      <div className="app__specialMenu-menu_wine flex__center" >
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items'>
          {/**this is details are coming from menuitem component  */}
          {data.wines.map((wine, index) => (
           <MenuItem key={wine.title + index} 
           title={wine.title} 
           price={wine.price} 
           tags={wine.tags}/>
          ))}

        </div>
      </div>


         {/**the second div in the component the img part */}
      <div className="app__specialMenu-menu-img">
      <img src={images.menu} alt="menu img" />
    </div>


     {/**the yhird div in the component the cocktails part */}
    <div className="app__specialMenu-menu_cocktails flex__center" >
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {/**this is details are coming from menuitem component  */}
          {data.cocktails.map((cocktail, index) => (
             <MenuItem key={cocktail.title + index} 
             title={cocktail.title}
              price={cocktail.price} 
              tags={cocktail.tags}/>
          ))}
         </div>
        </div>

    </div>


    {/**the button below */}
    <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>
         View More
        </button>
    </div>

    

  </div>  
);

export default SpecialMenu;
