import React from 'react';
import harryPotter from '../images/HarryPotter.png';
import loveSearch from '../images/loveSearch.png';
import awsomeCards from '../images/awsomeCards.png';
import guessNumber from '../images/guessNumber.png';
import backProject from '../images/BackProject.png';
import memory from '../images/memory.png';
import cashflow from '../images/cashflow.png';

const projectsData = [
     {
          title: 'CashFlow',
          imgSrc: cashflow,
          description: 'This web app has been created to assist with finance management by recording all income and expenses over a span of three months. The graphic displays the changes over time. By clicking the orange button, users can add a new transaction using a form.', 
          builtWith: 'HTML5, CSS, JavaScript, Vue.js, Git',
          githubLink: 'https://github.com/patriciabog/CashFlow',
          demoLink: 'https://financeapp-cashflow.netlify.app/'
     },
     // Add other project objects here
     {
          title: 'Memory game',
          imgSrc: memory,
          description: 'This is a memory game designed for kids, perfect for training their brains. It features images of planets and accompanying sounds.',
          builtWith: 'HTML5, CSS, JavaScript, Git',
          githubLink: 'https://github.com/patriciabog/Memory-Game',
          demoLink: 'https://patriciabog.github.io/Memory-Game/'
     },
     {
          title: 'Love Search',
          imgSrc: loveSearch,
          description: 'This web application was developed using APIs. By clicking the Get Started! button, you gain access to a list of people. You can conveniently filter the list based on gender and age or perform a search by name.',
          builtWith: 'Built with: HTML5, CSS/SCSS, JavaScript, React, npm, Git',
          githubLink: 'https://github.com/patriciabog/LoveSearch',
          demoLink: 'https://patriciabog.github.io/LoveSearch/'
     },
     {
          title: 'Harry Potter',
          imgSrc: harryPotter,
          description: 'This web page has been developed to showcase Harry Potter characters using APIs. You can conveniently filter the characters by name and/or house, making it easy to find your favorite characters or explore those belonging to a specific house.',
          builtWith: 'Built with: HTML5, CSS/SCSS, JavaScript, React, npm, Git',
          githubLink: 'https://github.com/patriciabog/HarryPotter',
          demoLink: 'https://patriciabog.github.io/HarryPotter/'
     },
     {
          title: 'Awsome Cards',
          imgSrc: awsomeCards,
          description: 'Welcome to our team project—an interactive web app for creating personalized digital business cards. Ditch paper waste and embrace a cost-effective, eco-friendly solution. Design your unique card, share it online, and make a lasting impression while helping the environment.',
          builtWith: 'HTML5, CSS/SCSS, JavaScript, npm, Git',
          githubLink: 'https://github.com/patriciabog/AwsomeCards',
          demoLink: 'https://patriciabog.github.io/AwsomeCards/index.html'
     },
     {
          title: 'Guess the Number',
          imgSrc: guessNumber,
          description: 'In this game, you have to try to guess the number. Below, you can see how many attempts you have made. If your guess is incorrect, you can try again.',
          builtWith: 'HTML5, CSS/SCSS, JavaScript, Git',
          githubLink: 'https://github.com/patriciabog/Guess-the-number',
          demoLink: 'https://patriciabog.github.io/Guess-the-number/'
     },
     {
          title: 'Projectos Molones ',
          imgSrc: backProject,
          description: 'Welcome to our team project web app! Get ready to unleash your creativity and showcase your projects like never before. Our platform empowers you to design fully customized project cards tailored to your vision. Share your achievements with the world by publishing your projects effortlessly. Our intuitive interface makes it a breeze to share your passion and inspire others.',
          builtWith: 'BHTML5, CSS/SCSS, JavaScript, React, MySQL, Zeplin, Git/GitHub, Gulp, Node.js, Express.',
          githubLink: 'https://github.com/patriciabog/Proyectos-Molones',
          demoLink: 'https://proyectos-molones.onrender.com/'
     },

];


function Projects() {
    return (
          <div className='box'>
               <h3 className='box__title'>Projects</h3>
               <p className='box__subtitle'>Here are a few projects I've worked on recently.
               </p>
            <div className=' projects'>
               {projectsData.map((project, index) => (
                    <article className='projects__article' key={index}>
                             <img className='projects__article__img' src={project.imgSrc} alt={project.title} />
                         <div className='content'>
                              <h4 className='projects__article__title'>{project.title}</h4>
                              <p className='projects__article__p'>{project.description} 
                              <p>Built with: {project.builtWith}</p> </p>
                         </div>
                         <div className='projects__article__links'>
                              <a href={project.githubLink} target='blank' className='projects__article__links__icon'> <i className="fa-brands fa-github" ></i> GitHub</a>
                              <a href={project.demoLink} target='blank' className='projects__article__links__icon'><i className="fa-solid fa-images"></i> Demo</a>
                         </div>
                    </article>
               ))}   
          </div>  
     </div>
    )
}
export default Projects;