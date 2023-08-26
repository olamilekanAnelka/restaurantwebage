import React, {useState} from 'react';
import { FaHamburger} from 'react-icons/fa';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';



{/* the Navbar Component */}
const Navbar = () => {
  /* the code responsible for the toggle menu on moble screen */
    const [toggleMenu, setToggleMenu] = useState(false);


    return(
      /*the parentof the navbar */
  <nav className='app__navbar'>
      
      {/**the brandName  */}
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo' />
    </div>

    {/** the list item on bigger screen */}
    <ul className='app__navbar-links'>
      <li className='navbar__P'>
        <a href="#home">Home</a>
      </li>
      <li className='navbar__P'>
        <a href="#about">About</a>
      </li>
      <li className='navbar__P'>
        <a href="#menu">Menu</a>
      </li>
      <li className='navbar__P'>
        <a href="#award">Awards</a>
      </li>
      <li className='navbar__P'>
        <a href="#contact">Contacts</a>
      </li>
    </ul>

    {/** the login and register button and the book a table button on the navbar */}
    <div className="app__navbar-login">
      <a href="#login" className='navbar__p'>Log in / Register </a>
    <div/>
      <a href="/" className='navbat__p'>Book Table</a>
    </div>

    {/** the toggle icon which the list item will change on  */}
    <div className="app__navbar-smallscreen">
        <FaHamburger color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center sli'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen-links'>
            <li className='navbar__P'>
              <a href="#home">Home</a>
            </li>
            <li className='navbar__P'>
              <a href="#about">About</a>
            </li>
            <li className='navbar__P'>
              <a href="#menu">Menu</a>
            </li>
            <li className='navbar__P'>
              <a href="#award">Awards</a>
            </li>
            <li className='navbar__P'>
              <a href="#contact">Contacts</a>
            </li>
        </ul>
       </div>
       )};
    </div>
    

  </nav>
)};

export default Navbar;
