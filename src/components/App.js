/* SECCIÓN DE IMPORT */
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import '../styles/App.scss';

// - Imágenes
import code from '../images/code.png'
/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
 
  /* EFECTOS (código cuando carga la página) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div>
      <header className='header'>
        <h3>Portfolio <img src={code} alt="" /></h3>
        <div>
           <ul>
            <li>
              <Link to='/'>About me</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
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
   
    </div>
  )
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
