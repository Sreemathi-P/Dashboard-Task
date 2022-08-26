import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import Nav from 'react-bootstrap/Nav';
import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { MdWorkOutline, MdBarChart } from 'react-icons/md'

const SideBar = () => {
  return (
    <CDBSidebar textColor="#333" backgroundColor="#ffffff">
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <div className='sideBar'>
            {/*<a href="#home">
              <CDBSidebarMenuItem icon="home">
              </CDBSidebarMenuItem> 
              <AiOutlineHome className='home-icon' />
              */}
            <Nav.Link href="/home" className='nav-icon'>
              <AiOutlineHome className='home-icon' />
              <h6 className='sideLabel'>Home</h6>
            </Nav.Link>
            <br></br>

            <Nav.Link href="/work" className='nav-icon'>
              <MdWorkOutline className='home-icon' />
              <h6 className='sideLabel'>Work</h6>
            </Nav.Link>
            <br></br>

            <Nav.Link href="/reports" className='nav-icon'>
              <MdBarChart className='home-icon' />
              <h6 className='sideLabel'>Reports</h6>
            </Nav.Link>
            <br></br>

            <Nav.Link href="/create" className='nav-icon'>
              <AiOutlinePlus className='home-icon' />
              <h6 className='sideLabel'>Create</h6>
            </Nav.Link>
            <br></br>
          </div>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default SideBar;