import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Backspace-Logo.jpg';
import { NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import { MdOutlineNotificationsActive, MdOutlineHelp } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className='logo'>
            <img src={logo} className='img' alt="Brand Logo" />
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav className="ml-auto">
              <Nav.Link href="/notification" className='nav-icon'>
                <MdOutlineNotificationsActive className='home-icon' />
              </Nav.Link>
              <Nav.Link href="/help" className='nav-icon'>
                <MdOutlineHelp className='home-icon' />
              </Nav.Link>
              <Nav.Link href="/profile" className='nav-icon'>
                <BiUserCircle className='home-icon' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;