import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px 20px 0 20px;
  background-color: #44444d;
`;

export const ColumnList = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
`;

export const ColumnContainer = styled.div``;

export const ColumnTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const ColumnItem = styled(Link)`
  color: #fff;
  display: block;
`;
export const FooterText = styled.div`
  text-align: center;
  color: #fff;
  padding: 20px 0 10px 0;
`;
