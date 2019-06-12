import React from 'react';

import './App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div >
        <Menu />
        <Home />
        <About />
        <Contact />
    </div>
  );
}
const Home = () =>{
  return(
      <div className="Contactstyle">
          <h2>Welcome to home page</h2>
      </div>
  )
}
export default App;
