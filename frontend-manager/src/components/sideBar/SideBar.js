import { Link, NavLink } from 'react-router-dom';
// import {
//   SidebarContainer,
//   NavItem,
//   SidebarLogo,
//   SidebarTitle,
//   NavList,
// } from './NavBar.styles';

import { Nav, Navbar } from 'react-bootstrap';

function SideNavBar({ user }) {
  return (
    <Navbar className='navbar-vertical' fixed='left' variant='dark' expand='md'>
      <Navbar.Collapse>
        <Nav className='d-flex'>
          <ul className='flex-column'>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/stores'>Stores</Link>
            </li>
            <li>
              <Link to='/dashboard'>Categories</Link>
            </li>
            <li>
              <Link to='/dashboard'>Products</Link>
            </li>
            <li>
              <Link to='/dashboard'>Registers</Link>
            </li>
            <li>
              <Link to='/dashboard'>Finace</Link>
            </li>
            <li>
              <Link to='/dashboard'>Settings</Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SideNavBar;
