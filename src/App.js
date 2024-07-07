import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Header from './layouts/header'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';
import Works from './pages/works';

class App extends Component {
  render(){
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/Sevices" element={ <Services /> } />
          <Route path="/Works" element={ <Works /> } />
        </Routes>
      </Router>
    )
  }
}

export default App;
