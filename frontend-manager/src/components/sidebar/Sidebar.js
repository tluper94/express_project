import { Link } from 'react-router-dom';
import {
  SidebarContainer,
  SidebarItemContainer,
  SidebarLogo,
  SidebarTitle,
} from './Sidebar.styles';

function Sidebar({ user }) {
  return user ? (
    <SidebarContainer>
      <SidebarItemContainer>
        <Link to='/'>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Dashboard</SidebarTitle>
        </Link>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <Link to='/stores'>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Stores</SidebarTitle>
        </Link>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <Link to='/products'>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Products</SidebarTitle>
        </Link>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <Link to='/categories'>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Categories</SidebarTitle>
        </Link>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <Link to='/employees'>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Employees</SidebarTitle>
        </Link>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <Link to='/finance'>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Finance</SidebarTitle>
        </Link>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <Link to='/settings'>
          <SidebarLogo></SidebarLogo>
          <SidebarTitle>Settings</SidebarTitle>
        </Link>
      </SidebarItemContainer>
    </SidebarContainer>
  ) : (
    <SidebarContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Login</SidebarTitle>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Register</SidebarTitle>
      </SidebarItemContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
