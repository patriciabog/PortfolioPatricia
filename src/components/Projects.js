import React from 'react';
import { useTranslation } from "react-i18next";
import { FaGithub, FaImages } from 'react-icons/fa';
import { projectsData } from './data/projectsData';

function Projects() {
     /**
   * Translates a description using the provided translation function.
   *
   * @param {string} descriptionKey - The key identifying the description to translate.
   * @returns {string} The translated description.
   */
     const { t } = useTranslation();
     const translateDescription = (descriptionKey) => {
          return t(descriptionKey);
     };
    return (
         <div className='box'>
              <h3 className='box__title'>{t("projects.title")}</h3>
              <h4 className='box__subtitle'>{t("projects.subtitle")}</h4>
              <div className='projects'>
                   {projectsData.map((project) => (
                        <article className='projects__article' key={project.id}>
                             <img className='projects__article__img' src={project.image} alt={project.title} /> {/* Use the image directly from the project object. */}
                             <div className='content'>
                                  <h4 className='projects__article__title'>{project.title}</h4>
                                  <p className='projects__article__p'>{translateDescription(project.description)}</p>
                                  <p className='projects__article__p'>🛠 {project.builtWith}</p>
                             </div>
                             <div className='projects__article__links'>
                                  <a href={project.githubLink} target='blank' className='projects__article__links__icon'>
                                       <FaGithub /> GitHub
                                  </a>
                                  <a href={project.demoLink} target='blank' className='projects__article__links__icon'>
                                       <FaImages /> Demo
                                  </a>
                             </div>
                        </article>
                   ))}
              </div>
         </div>
    );
}
export default Projects;