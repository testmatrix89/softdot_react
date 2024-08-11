import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Homebanner from '../components/homebanner';

function Header() {
  const location = useLocation();

  const [date, setDate] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number) =>{
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  const hFormat = (hour) => +hour % 12 || 12;

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className='logo'><span className="soft">SOFT</span><span className="dottxt">dot<span className='dot'>.</span></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={ Link } to="/home" className='nav-link'>Home</Nav.Link>
              <Nav.Link as={ Link } to="/about" className='nav-link'>About</Nav.Link>
              <Nav.Link as={ Link } to="/services" className='nav-link'>Services</Nav.Link>
              <Nav.Link as={ Link } to="/products" className='nav-link'>Products</Nav.Link>
              <Nav.Link as={ Link } to="/works" className='nav-link'>Works</Nav.Link>
              <Nav.Link as={ Link } to="/contact" className='nav-link'>contact</Nav.Link>
              <Nav.Link as={ Link } to="/games" className='nav-link'>Games</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text className='text-info'>
                {convertToTwoDigit(hFormat(date.hours))}:{convertToTwoDigit(date.minutes)}:{convertToTwoDigit(date.seconds)} {date.hours >= 12 ? 'pm' : 'am'}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      { (location.pathname == '/home' || location.pathname == '/') ? <Homebanner text='Learning is on being progress...' /> : '' }
    </header>
  );
}

export default Header;