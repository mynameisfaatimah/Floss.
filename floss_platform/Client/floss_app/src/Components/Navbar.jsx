import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavItem, NavLink } from 'reactstrap';

import '../css/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Nav vertical>
        <div style={{ height: '50px' }}></div>
          <NavItem>
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Dental Resources</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Calendar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Logout</NavLink>
          </NavItem>
        </Nav>
      </div>
      <button className={`toggle-sidebar ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </>
  );
};

export default Sidebar;
