import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  /* ${reset} */

  

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    line-height: 1.3;

  }
  .App {
    text-align: center;
  }

  img {
    border-radius: 5px;
    box-shadow: 1px 5px 10px black;
  }
  

  
`;
