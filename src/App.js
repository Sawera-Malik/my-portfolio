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
import ProjectDetails from './projects/ProjectDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<>
            <Home />
            <About />
            <MyServices />
            <Projects />
            <Portfolio />
            <Contact />
            <Footer />
          </>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
