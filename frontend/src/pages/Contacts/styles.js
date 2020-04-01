import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  div {
    width: 100%;
    max-width: 500px;
  }
`;

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      border: none;
      border-radius: 4px;
      background-color: #fff;
      display: block;
      margin-bottom: 15px;
      padding: 0 10px;
      color: #222;
    }

    textarea {
      height: 100px;
      border: none;
      border-radius: 4px;
      background-color: #fff;
      display: block;
      margin-bottom: 15px;
      padding: 0 10px;
      color: #222;
      padding-top: 10px;
    }

    button {
      background: none;
      padding: 10px 20px;
      border: 1px solid blue;
      border-radius: 4px;
      align-self: stretch;
      margin-top: auto;
      text-transform: uppercase;
      transition: 0.2s;

      &:hover {
        background: #5050ff;
        color: white;
        border-color: transparent;
      }
    }
  }
`;
