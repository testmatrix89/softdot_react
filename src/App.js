import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Header from './layouts/header'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';
import Works from './pages/works';
import Products from './pages/products';
import Games from './pages/games';

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
          <Route path="/services" element={ <Services /> } />
          <Route path="/products" element={ <Products /> } />
          <Route path="/works" element={ <Works /> } />
          <Route path="/games" element={ <Games /> } />
        </Routes>
      </Router>
    )
  }
}

export default App;
