import React from 'react';
import photo from '../images/foto-Patri-small.jpg';
import '../styles/App.scss';

function About() {
    return (
    <div className='about'>
        <h3 className='about__title'> Hi Everyone! </h3>
        <div className='box'>
        <p className='box__parraf'>
            <p className='parraf'>I'm <span className='name'>Patricia Montes de oca</span> Junior Full Stack developer.</p>
           <h4 className='subtitle'>Let me introduce myself</h4>
           <p className='parraf'>I am passionate of programing and I have at least learned something, I think...🤷🏻‍♀️</p>
           <p className='parraf'> I am fluent in <span className='name'> HTML5, JavaScript, SASS, React, MySQL.</span></p>
          
           <p className='parraf'>Always I try to learn new things, try new technologies and improve my skills and knowledge. </p>
          
        </p>
        <img src={photo} alt="" className='box__img'/>
      </div>
       <h3 className='find'>Find me on</h3>
      <p className='find__subtitle'>Feel free to connect with me</p>
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