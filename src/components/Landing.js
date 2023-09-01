import { React, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Landing = () => {
    const { t } = useTranslation(); 
    return (
        <div className="landing">
            <h1 className="landing__title">Patricia Montes de oca</h1>
            <h3 className="landing__subtitle">Frontend Developer</h3>
            <p className="landing__p">{t("landing.description")}</p>
            <div className="landing__bubbles"> 
                <div className="bubble"></div>
                <div className="bubble bubble1"></div> 
            </div>
            <Link to='/about'> 
                <button className="landing__btn">{t("landing.buttonText")}</button>
            </Link>
        </div>
    );
};

export default Landing;