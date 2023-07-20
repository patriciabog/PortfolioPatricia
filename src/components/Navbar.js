import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.scss';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Closes the menu after clicking an option
  };
return (
  <div className='nav-box'>
   
    <div>
      <nav onClick={handleMenuToggle}>
        {isOpen ? <FaTimes className="nav-icon" /> : <FaBars className="nav-icon" />}
      </nav>
      <Menu className='nav' isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)} right={true}>
        <ul className="nav__list">
          <li className="nav__list__menu">
            <Link to='/about' className='nav__link' onClick={handleMenuItemClick}>About</Link>
          </li>
          <li className="nav__list__menu">
            <Link to='/projects' className='nav__link'  onClick={handleMenuItemClick}>Projects</Link>
          </li>
          <li className="nav__list__menu">
            <Link to='/contact' className='nav__link'  onClick={handleMenuItemClick}>Contact</Link>
          </li>
          <li className="nav__list__menu">
            <Link to='/' className='nav__link' onClick={handleMenuItemClick}>Home</Link>
          </li>
        </ul>
      </Menu>  
    </div>
       
  </div>  
 )
}
export default Navbar;