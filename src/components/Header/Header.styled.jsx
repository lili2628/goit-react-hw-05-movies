import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.header`
  background-color: #d5a6bd;
  box-shadow: #aa7a92;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 30px 0;
  max-width: 100%;

  display: flex;
`;

export const NavList = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavListLink = styled(NavLink)`
  display: block;
  padding: 8px 14px;

  font-weight: 700;
  font-size: 22px;

  border-radius: 4px;

  transition: all 200ms ease-in-out;
`;