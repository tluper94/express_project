import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  width: 200px;
  max-width: 200px;
  padding: 1rem;
  position: fixed;
  top: 0;
  overflow: auto;
  background-color: #212529;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin-bottom: auto;
`;

export const NavItem = styled.li`
  display: flex;
  font-size: 1rem;
  flex-direction: row;
  align-items: center;

  a {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  a:visited {
    color: white;
  }
`;

export const SidebarLogo = styled.div``;

export const SidebarTitle = styled.h3`
  font-size: 18px;
  color: white;
`;
