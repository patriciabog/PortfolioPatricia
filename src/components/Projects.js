import React from 'react';
import harryPotter from '../images/HarryPotter.png'
import loveSearch from '../images/loveSearch.png'
import awsomeCards from '../images/awsomeCards.png'
import guessNumber from '../images/guessNumber.png'
import backProject from '../images/BackProject.png'
import memory from '../images/memory.png'

function Projects() {
    return (
        <div className='box'>
            <h3 className='box__title'>My Projects</h3>
            <p className='box__subtitle'>
          Here are a few projects I've worked on recently.
           </p>
            <div className=' projects'>

                <article className='projects__article'>
                        <img className='projects__article__img' src={memory} alt="Memory Game" />
                        <h4 className='projects__article__title'>Memory game </h4>
                        <p className='projects__article__p'>This is a memory game for kids, excelent to trin your brian, have planets images and sounds. Built with:</p>
                         <p className='projects__article__p2'><span><i className='bx bxl-html5 projects__article__p2__html'></i></span> <span><i className='bx bxl-css3 projects__article__p2__css'></i></span> <span><i className='bx bxl-nodejs projects__article__p2__js' ></i></span></p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog/Memory-Game" target='blank' className='projects__article__links__icon'> <i className="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://patriciabog.github.io/Memory-Game/" target='blank' className='projects__article__links__icon'><i className="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>


                <article className='projects__article'>
                     <img className='projects__article__img' src={loveSearch} alt="LoveSearch" />
                        <h4 className='projects__article__title'>LoveSearch </h4>
                        <p className='projects__article__p'>This web application was made using APIs. Once has been clike the button "Get Started!" you can see a list of people it's possible filter by gender and age or search by name. Built with:</p>
                          <p className='projects__article__p2'><span><i className='bx bxl-html5 projects__article__p2__html'></i></span> <span><i className='bx bxl-css3 projects__article__p2__css'></i></span> <span><i className='bx bxl-nodejs projects__article__p2__js' ></i></span> <span><i className='bx bx-atom projects__article__p2__react'></i></span></p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog/LoveSearch" target='blank' className='projects__article__links__icon'> <i className="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://patriciabog.github.io/LoveSearch/" target='blank' className='projects__article__links__icon'><i className="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>

                 <article className='projects__article'>
                        <img className='projects__article__img' src={harryPotter} alt="HarryPotter" />
                        <h4 className='projects__article__title'>Harry Potter </h4>
                        <p className='projects__article__p'>In this web page has been developed with a list of Harry  Potter characters that we can filter by name or/and by house. Built with:</p>
                         <p className='projects__article__p2'><span><i className='bx bxl-html5 projects__article__p2__html'></i></span> <span><i className='bx bxl-css3 projects__article__p2__css'></i></span> <span><i className='bx bxl-nodejs projects__article__p2__js' ></i></span> <span><i className='bx bx-atom projects__article__p2__react'></i></span></p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog/HarryPotter" target='blank' className='projects__article__links__icon'> <i class="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://patriciabog.github.io/HarryPotter/" target='blank' className='projects__article__links__icon'><i class="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>

                <article className='projects__article'>
                     <img className='projects__article__img' src={awsomeCards} alt="awsomeCards" />
                        <h4 className='projects__article__title'>Awsome Cards </h4>
                        <p className='projects__article__p'> This is a team project, it has been created an interactive web application where you can create a personalized business card. Built with:</p>
                        <p className='projects__article__p2'><span><i className='bx bxl-html5 projects__article__p2__html'></i></span> <span><i className='bx bxl-css3 projects__article__p2__css'></i></span> <span><i className='bx bxl-nodejs projects__article__p2__js' ></i></span></p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog/AwsomeCards" target='blank' className='projects__article__links__icon'> <i className="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://patriciabog.github.io/AwsomeCards/index.html" target='blank' className='projects__article__links__icon'><i className="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>

                <article className='projects__article'>
                     <img className='projects__article__img' src={guessNumber} alt="guessNumber" />
                        <h4 className='projects__article__title'>Guess the Number </h4>
                        <p className='projects__article__p'>In this game you have to try to guess the number, below you can see how many times you are trying, if it is not the correct one you can try again. Built with:</p>
                         <p className='projects__article__p2'><span><i className='bx bxl-html5 projects__article__p2__html'></i></span> <span><i className='bx bxl-css3 projects__article__p2__css'></i></span> <span><i className='bx bxl-nodejs projects__article__p2__js' ></i></span></p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog/Guess-the-number" target='blank' className='projects__article__links__icon'> <i className="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://patriciabog.github.io/Guess-the-number/" target='blank' className='projects__article__links__icon'><i className="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>

                <article className='projects__article'>
                     <img className='projects__article__img' src={backProject} alt="Back project" />
                        <h4 className='projects__article__title'>Projectos Molones </h4>
                        <p className='projects__article__p'>This is a team project web app, which will allow you to create fully customized project cards and publish your projects.
                        Built with: Html, Sass, JavaScript, React and API, Zeplin, Git/GitHub, Gulp, MySQL Workbench, Node.js, Express.js. </p>
                         <p className='projects__article__p2'><span><i className='bx bxl-html5 projects__article__p2__html'></i></span> <span><i className='bx bxl-css3 projects__article__p2__css'></i></span> <span><i className='bx bxl-nodejs projects__article__p2__js' ></i></span> <span><i className='bx bxl-react projects__article__p2__react'></i></span><span><i className='bx bxl-git projects__article__p2__git'></i></span><span><i className='bx bxs-data projects__article__p2__data'></i></span><span><i className='bx bxl-sass projects__article__p2__sass'></i></span>
                         </p>
                        <div className='projects__article__links'>
                             <a href="https://github.com/patriciabog" target='blank' className='projects__article__links__icon'> <i className="fa-brands fa-github" ></i> GitHub</a>
                            
                             <a href="https://proyectos-molones.onrender.com/" target='blank' className='projects__article__links__icon'><i className="fa-solid fa-images"></i> Demo</a>
                           
                        </div>
                </article>

                <article>
                </article>
                
                </div>
          
           
        </div>
    )

}
export default Projects;