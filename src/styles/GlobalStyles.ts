import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    background-repeat: no-repeat;
    background-color: #E8EEF1;
  }
  a, button {
    font-family: 'Montserrat', sans-serif
  }
`;

export default GlobalStyle;
