/* SECCIÓN DE IMPORT */
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

import '../styles/App.scss';


function App() {
  return (
    <div>
      <header className='header'>
        <a className="header__title" href="/">Portfolio <i class="fa-solid fa-laptop-code"></i>
        </a>
        <ul className="header__list">
          <li className="header__list__menu">
              <Link to='/'>About me</Link>
          </li>
          <li className="header__list__menu">
              <Link to='/projects'>Projects</Link>
          </li>
          <li className="header__list__menu">
              <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        
          <NavBar/>
        
      </header>
     
 
     <main className='container'>  
          
      <Routes>
      <Route path='/'
      element={
         <About/>
      }></Route>
      
      <Route path='/projects'
      element={
          <Projects/>
      }></Route>
    
    <Route path='/contact'
      element={
        <Contact/>
      }></Route>
     
     </Routes>
    
     </main>
     <footer className="footer">
           <span className='footer__copyright'>ⒸPatricia Montes de oca</span>
     </footer>
    </div>
  )
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
