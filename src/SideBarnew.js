import Nav from 'react-bootstrap/Nav';
import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { MdWorkOutline, MdBarChart } from 'react-icons/md'


function SideBarnew() {
  return (
    <div className='sidebar-new'>
      <Nav defaultActiveKey="/home" className="flex-column">
      <br></br>
      <Nav.Link href="/home" className='nav-icon'>
        <AiOutlineHome className='home-icon' />
        <h6 className='sideLabel'>Home</h6>
      </Nav.Link>

      <Nav.Link href="/work" className='nav-icon'>
        <MdWorkOutline className='home-icon' />
        <h6 className='sideLabel'>Work</h6>
      </Nav.Link>

      <Nav.Link href="/reports" className='nav-icon'>
        <MdBarChart className='home-icon' />
        <h6 className='sideLabel'>Reports</h6>
      </Nav.Link>

      <Nav.Link href="/create" className='nav-icon'>
        <AiOutlinePlus className='home-icon' />
        <h6 className='sideLabel'>Create</h6>
      </Nav.Link>
    </Nav>
    </div>
  );
}

export default SideBarnew;