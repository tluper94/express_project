import React from 'react';
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
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Dashboard</SidebarTitle>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Stores</SidebarTitle>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Products</SidebarTitle>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Categories</SidebarTitle>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Employees</SidebarTitle>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Financial</SidebarTitle>
      </SidebarItemContainer>
      <SidebarItemContainer>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>Settings</SidebarTitle>
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
