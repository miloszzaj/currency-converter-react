import { createGlobalStyle } from 'styled-components';
import img from './background.jpg';

export const GlobalStyle = createGlobalStyle`


html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}


body {
  margin: 0;
  background-image: url(${img});
  background-size: cover;
  background-attachment: fixed;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
font-family: 'Caudex', serif
}
button, input, select {
  font-family: 'Caudex', serif
}

`;
