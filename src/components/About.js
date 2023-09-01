import React from 'react';
import photo1 from '../images/photo1.png';
import { useTranslation } from "react-i18next";
import { skillsData } from './data/skillsData';

function About() {
    const { t } = useTranslation();
return (
   <div className='about'>
        <h3 className='about__title'>{t("about.title")}</h3>
        <section className='intro'>
           <div className='intro__parraf'>
                <p className='intro__parraf__p'>{t("about.name")} <span className='intro__parraf__p__name'>Patricia</span> Frontend Web Developer.</p>
                <p className='intro__parraf__p'>{t("about.parraf")}</p>
                <p className='intro__parraf__p'>{t("about.parraf2")}</p>
            </div>
            <div className='intro__img'>
                <img src={photo1} alt="Yo misma" className='intro__img__photo' />
            </div>  
        </section>
        <section className='about__skills'>
            <h3 className='about__skills__title'>{t("about.skills")}</h3>
            <ul className='about__skills__list'>
                {skillsData.map((skill) => (
                    <li className='about__skills__list__img' key={skill.id}>
                        <img className='about__skills__list__img__icon' src={skill.image} alt={skill.alt} />
                        {skill.name}
                    </li>
                ))}
            </ul>
        </section>
    </div>
    )
}
export default About;