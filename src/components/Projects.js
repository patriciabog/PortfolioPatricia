import React from 'react';
import harryPotter from '../images/HarryPotter.png'
import loveSearch from '../images/LoveSearch.png'

function Projects() {
    return (
        <div className='box'>
            <h3 className='box__title'>My Projects</h3>
            <p className='box__subtitle'>
          Here are a few projects I've worked on recently.
           </p>
            <div className=' projects'>
                 <article className='projects__article'>
                        <img className='projects__article__img' src={harryPotter} alt="HarryPotter" />
                        <h4 className='projects__article__title'>Harry Potter </h4>
                        <p className='projects__article__p'>In this web page has been developed with a list of Harry  Potter characters that we can filter by name or/and by house, built with Html, Sass, JavaScript, React and APIs.</p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog/HarryPotter" target='blank' className='projects__article__links__icon'> <i class="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://patriciabog.github.io/HarryPotter/" target='blank' className='projects__article__links__icon'><i class="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>

                <article className='projects__article'>
                     <img className='projects__article__img' src={loveSearch} alt="HarryPotter" />
                        <h4 className='projects__article__title'>LoveSearch </h4>
                        <p className='projects__article__p'>This is a project made with a lot of LOVE. Sometimes is difficult to find the right person, someone that match with you. It is posible filter by gender. Built with Html, Sass, JavaScript, React and APIs.</p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog/LoveSearch" target='blank' className='projects__article__links__icon'> <i class="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://patriciabog.github.io/LoveSearch/" target='blank' className='projects__article__links__icon'><i class="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>

                <article>
                </article>

                <article>
                </article>

                <article>
                </article>

                <article>
                </article>
                
                </div>
          
           
        </div>
    )

}
export default Projects;