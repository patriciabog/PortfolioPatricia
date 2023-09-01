import { React, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from './Navbar';

function Header() {
    const { t } = useTranslation(); 
    return (
        <header className='header'>
            <Link className="header__title" to="/">Portfolio <i className="fa-solid fa-laptop-code"></i>
            </Link>
            <ul className="header__list">
                <li className="header__list__menu">
                    <Link to='/' className="header__link">{t("header.home")}</Link>
                </li>
                <li className="header__list__menu">
                    <Link to='/about' className="header__link">{t("header.about")}</Link>
                </li>
                <li className="header__list__menu">
                    <Link to='/projects' className="header__link">{t("header.projects")}</Link>
                </li>
                <li className="header__list__menu">
                    <Link to='/contact' className="header__link">{t("header.contact")}</Link>
                </li>
            </ul>
                <Navbar />
        </header>
    )
}
export default Header;