import React from 'react';
import photo from '../images/photo.png';


function About() {
    return (
    <div className='about'>
        <h3 className='about__title'> Hi Everyone! </h3>
        <div className='intro'>
           <p className='intro__parraf'>
               <p className='intro__parraf__p'>I'm <span className='intro__parraf__p__name'>Patricia Montes de oca</span> Web Developer.</p>
               <h4 className='intro__parraf__subtitle'>Let me introduce myself</h4>
               <p className='intro__parraf__p'>I'm a Web Developer, currently I'm looking for a new challenge where I can continue learning and improve my skills and knowledge. I have experience working within a scrum and agile metodologies.</p>
               <p className='intro__parraf__p'> I have knowledge of <span className='intro__parraf__p__name'> HTML5, JavaScript, CSS/SASS, React, MySQL </span>and basic knowledge of APIs and backend programming in applications with Node.js, Express.js.</p>
               <p className='intro__parraf__p'>I love traveling and test the local food, also I like to ride my bicycle. Take a look at my GitHub for all my projects. </p>
          
            </p>
            <img src={photo} alt="" className='intro__img'/>
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