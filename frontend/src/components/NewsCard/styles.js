import styled from 'styled-components';

export const NewsContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;

  & + & {
    margin-top: 20px;
  }
`;

export const NewsTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

export const NewsText = styled.p`
  margin-bottom: 20px;
`;

export const NewsButton = styled.button`
  background: none;
  padding: 10px 20px;
  border: 1px solid blue;
  border-radius: 4px;
  align-self: center;
  margin-top: auto;
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    background: #5050ff;
    color: white;
    border-color: transparent;
  }
`;
