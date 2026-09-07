import './App.css';
import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import MyServices from './services/MyServices';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Portfolio from './portfolio/Portfolio';
function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Home />
      <About />
      <MyServices />
      <Projects />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
