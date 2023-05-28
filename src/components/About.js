import React from 'react';
import photo from '../images/photo.png';
import html from '../images/html-5.png';
import sass from '../images/sass.png';
import js from '../images/js.png';
import react from '../images/physics.png';
import mysql from '../images/mysql.png';
import git from '../images/git.png';

function About() {
    return (
    <div className='about'>
        <h3 className='about__title'> Hi Everyone! </h3>
        <div className='intro'>
           <p className='intro__parraf'>
               <h4 className='intro__parraf__subtitle'>Let me introduce myself</h4>
               <p className='intro__parraf__p'>I'm <span  className='intro__parraf__p__name'>Patricia Montes de oca</span> Web Developer and I have knowledge of HTML5, JavaScript, CSS/SASS, React, MySQL and basic knowledge of APIs and backend programming in applications with Node.js, Express.js.</p>
               <p className='intro__parraf__p'>Currently I'm looking for a new challenge where I can continue learning and improve my skills and knowledge. I have experience working within a scrum and agile metodologies.</p>
               
               <p className='intro__parraf__p'>I love traveling and test the local food, also I like to ride my bicycle. Take a look at my GitHub for all my projects. </p>
          
            </p>
            <img src={photo} alt="" className='intro__img'/>
        </div>
        <div className='about__skills'>
            <h3 className='about__skills__title'>Skills</h3>
            <ul className='about__skills__list'>
                <li className='about__skills__list__img'><img className='about__skills__list__img__icon' src={html} alt="" /></li>
                <li className='about__skills__list__img'><img className='about__skills__list__img__icon' src={sass} alt="" /></li>
                <li className='about__skills__list__img'><img className='about__skills__list__img__icon' src={js} alt="" /></li>
                <li className='about__skills__list__img'><img className='about__skills__list__img__icon' src={react} alt="" /></li>
                <li className='about__skills__list__img'><img className='about__skills__list__img__icon' src={mysql} alt="" /></li>
                 <li className='about__skills__list__img'><img className='about__skills__list__img__icon' src={git} alt="" /></li>
            </ul>
        </div>
            <h3 className='find'>Find me on</h3>
            <p className='find__subtitle'>Feel free to connect with me!</p>
             <div>
                <ul className='find__list'>
                   <li className='find__list__icon'>
                        <a href="https://github.com/patriciabog" target='blank'> <i className="fa-brands fa-github"></i></a>
              
                     </li>
                    <li className='find__list__icon'>
                         <a href="https://www.linkedin.com/in/epmontesdeocaverastegui/" target='blank'> <i class="fa-brands fa-linkedin" ></i></a>
              
                   </li>
                   <li className='find__list__icon'>
                         <a href="https://twitter.com/Patrybog" target='blank'> <i class="fa-brands fa-twitter"></i></a>
              
                   </li>
                </ul>
            </div>
         
    </div>
)

}
export default About;