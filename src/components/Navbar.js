import React from 'react';
import { Link } from "react-router-dom";
import '../styles/App.scss';



function Navbar() {


return (
  <nav className='nav'>
    <ul className='nav__list'>
        <li className='nav__icon'>
          <Link to='/'><i class="fa-solid fa-house" ></i></Link>
        </li>
        <li className='nav__icon'>
           <Link to='/projects'> <i class="fa-solid fa-laptop-file"></i></Link>
        </li>
        <li className='nav__icon'>
            <Link to='/contact'> <i class="fa-solid fa-envelope"></i></Link>
        </li>
      </ul>
        
  </nav>
   
)
}
export default Navbar;