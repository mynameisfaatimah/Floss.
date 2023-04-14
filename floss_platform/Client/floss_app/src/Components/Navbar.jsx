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
          <NavItem>
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Symptoms</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Treatments</NavLink>
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
