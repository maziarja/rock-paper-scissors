import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
    font-size: 62.5%;
}

body {
font-family: "Barlow Semi Condensed", serif;
background-image: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  min-height: 100dvh;
  height: 100%;
}
@media (min-width:43.75em) {
  html {
    font-size: 81.25%;
  }
}
`;

export default GlobalStyles;
