import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: left;

  text-decoration: none;
`;

export const Option = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;

  border: none;
  color: #574191;

  transition: all 200ms ease-in-out;
  cursor: pointer;
  
  margin-right: 10px;

  &.active {
    color: #fa0093;
    outline: 1px solid #fa0093;;
    box-shadow: 0px 0px 0px 1px #fa0093;
  }

  :hover,
  :focuds {
    color: #fa0093;
    outline: 1px solid #fa0093;;
    box-shadow: 0px 0px 0px 1px #fa0093;
  }

`;

