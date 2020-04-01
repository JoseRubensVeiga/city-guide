import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: #eee;
    font-family: 'Baloo Thambi 2', sans-serif;
  }
  
  textarea, input {
    font-family: 'Baloo Thambi 2', sans-serif;
    font-size: 16px;
  }


  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  button:hover {
    cursor: pointer;
  }
`;
