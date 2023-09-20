import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.scss';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);
  

  const menuItems = [
    { to: '/about', label: t('navbar.about') },
    { to: '/projects', label: t('navbar.projects') },
    { to: '/contact', label: t('navbar.contact') },
    { to: '/', label: t('navbar.home') },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='nav-box'>
      <nav >
        {isOpen ? (<FaTimes className="nav-icon" onClick={handleMenuToggle} />) : (<FaBars className="nav-icon" onClick={handleMenuToggle} />)}
      </nav>
      {isOpen && (
        <Menu className='nav' isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)} right={true}>
          <ul className="nav__list">
            {menuItems.map((item, index) => (
              <li key={index} className="nav__list__menu">
                <Link to={item.to} className='nav__link' onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      )}
    </div>
  );
}

export default Navbar;
