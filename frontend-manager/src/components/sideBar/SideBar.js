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
        <div className='d-flex navbar-vertical-content'>
          <ul className='flex-column navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/stores'>
                Stores
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/dashboard'>
                Categories
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/dashboard'>
                Products
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/dashboard'>
                Registers
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/dashboard'>
                Finace
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/dashboard'>
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SideNavBar;
