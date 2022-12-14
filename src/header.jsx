import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './backspaceLogo.png';
import { MdOutlineNotificationsActive, MdOutlineHelp } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';


function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className='logo'>
            <img src={logo} className='img' alt="Brand Logo" />
          </div>
          {/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'> */}
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
            <Nav className="ml-auto" style={{display:"flex", flexDirection:"row"}}>
              <Nav.Link href="/notification" className='nav-icon' style={{padding:"10px"}}>
                <MdOutlineNotificationsActive className='home-icon' />
              </Nav.Link>
              <Nav.Link href="/help" className='nav-icon' style={{padding:"10px"}}>
                <MdOutlineHelp className='home-icon' />
              </Nav.Link>
              <Nav.Link href="/profile" className='nav-icon' style={{padding:"10px"}}>
                <BiUserCircle className='home-icon' />
              </Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;