import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  height: 64px;
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  filter: invert(1);
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  margin-left: 20px;
`;

export const Item = styled(Link)`
  height: 64px;
  padding: 2px 20px 0px 20px;

  background: none;
  transition: 0.2s;
  color: #222;

  border-bottom: 3px solid transparent;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    border-bottom-color: #222;
  }

  & + li {
    margin-left: 10px;
  }

  svg {
    margin-right: 10px;
  }

  @media only screen and (max-width: 450px) {
    svg {
      display: none;
    }

    & {
      padding: 2px 10px 0px 10px;
    }
  }
`;
