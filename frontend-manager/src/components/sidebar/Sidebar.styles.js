import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 150px;
  position: fixed;
  top: 0;
  overflow: auto;
  background-color: #393d4f;
`;

export const SidebarItemContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: row;
`;

export const SidebarLogo = styled.div``;

export const SidebarTitle = styled.h3`
  color: white;
`;
