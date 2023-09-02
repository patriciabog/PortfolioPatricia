import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './Header';
import BtnLanguage from './BtnLanguage';
import About from './About';
import Contact from './Contact';
import Landing from './Landing';
import Projects from './Projects';
import '../styles/App.scss';

function App() {

  const location = useLocation();

  // This function will be executed every time you change route
  useEffect(() => {
    // Resets the scroll position to the top of the page
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Header/>
      <main className='container'>   
        <BtnLanguage />
        <Routes>
          <Route 
            path='/'
            element={<Landing />}>
          </Route>
          <Route 
            path='/about'
            element={<About/>}>
          </Route>
          <Route 
            path='/projects'
            element={<Projects/>}>
          </Route>
          <Route 
            path='/contact'
            element={<Contact/>}>
          </Route>
        </Routes>
      </main>
      <footer className="footer">
        <span className='footer__copyright'>ⒸPatricia Montes de oca</span>
     </footer>
    </div>
  )
}
export default App;
