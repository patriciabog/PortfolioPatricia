
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className='header'>
        <Link className="header__title" to="/">Portfolio <i className="fa-solid fa-laptop-code"></i>
        </Link>
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
        <Navbar />
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
export default App;
