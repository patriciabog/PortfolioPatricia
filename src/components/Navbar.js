import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.scss';
import { slide as Menu } from 'react-burger-menu';




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
    <nav onClick={handleMenuToggle}><i className="fa-solid fa-bars nav-icon"></i></nav>
    <Menu className='nav' isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)} >
      <ul className="nav__list">
        <li className="nav__list__menu">
          <Link to='/' onClick={handleMenuItemClick}>About me</Link>
        </li>
        <li className="nav__list__menu">
          <Link to='/projects' onClick={handleMenuItemClick}>Projects</Link>
        </li>
        <li className="nav__list__menu">
          <Link to='/contact' onClick={handleMenuItemClick}>Contact</Link>
        </li>
      </ul>
    </Menu>
   
        
  </div>
   
)
}
export default Navbar;