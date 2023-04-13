import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/logo.png';
import '../css/sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <img src={logo} alt="My Logo" className="logo" />
//           <button className="toggle-sidebar" onClick={toggleSidebar}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//         <Nav vertical>
//           <NavItem>
//             <NavLink href="#">Dashboard</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">Symptoms</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">Treatments</NavLink>
//           </NavItem>
//         </Nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

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
