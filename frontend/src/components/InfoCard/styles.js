import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 350px;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
  }
`;

export const CardContent = styled.div`
  padding: 10px 20px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardImage = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  filter: brightness(1);
  transition: 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CardSubtitle = styled.div`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
  margin-top: -10px;
`;

export const CardText = styled.p`
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
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
