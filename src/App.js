import React, { Component } from 'react';

import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
