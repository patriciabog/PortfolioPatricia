import React from 'react';
import { Link } from "react-router-dom";
//import menu from '../images/menu-icon.png'
import home from '../images/home.png';
import projects from '../images/projects.png';
import contact from '../images/mail.png';


function NavBar() {

return (
    <div>
        <nav>
        <ul>
            <li>
              <Link to='/'> <img src={home} alt="" /> </Link>
            </li>
            <li>
              <Link to='/projects'> <img src={projects} alt="" /></Link>
            </li>
            <li>
              <Link to='/contact'> <img src={contact} alt="" /></Link>
            </li>
          </ul>
          </nav>
    </div>
)
}
export default NavBar;