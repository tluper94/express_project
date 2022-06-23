import { Link, NavLink } from 'react-router-dom';
import {
  SidebarContainer,
  NavItem,
  SidebarLogo,
  SidebarTitle,
  NavList,
} from './Sidebar.styles';

function Sidebar({ user }) {
  return user ? (
    <SidebarContainer>
      <NavList>
        <NavItem>
          <Link to='/'>
            <SidebarLogo></SidebarLogo>
            Dashboard
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/stores'>
            <SidebarLogo></SidebarLogo>
            Stores
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/products'>
            <SidebarLogo></SidebarLogo>
            Products
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/categories'>
            <SidebarLogo></SidebarLogo>
            Categories
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/employees'>
            <SidebarLogo></SidebarLogo>
            Employees
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/finance'>
            <SidebarLogo></SidebarLogo>
            Finance
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/settings'>
            <SidebarLogo></SidebarLogo>
            Settings
          </Link>
        </NavItem>
      </NavList>
    </SidebarContainer>
  ) : (
    <SidebarContainer>
      <NavList>
        <NavItem>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Login</SidebarTitle>
        </NavItem>
        <NavItem>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Register</SidebarTitle>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
}

export default Sidebar;
