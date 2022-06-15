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

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: row;
  }
`;

export const SidebarItemContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: row;
`;

export const SidebarLogo = styled.div``;

export const SidebarTitle = styled.h3`
  font-size: 18px;
  color: white;
`;
