import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Golos';
    font-weight: 600;
    src: url('/assets/fonts/Golos-UI_Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Golos Bold';
    font-weight: 900;
    src: url('/assets/fonts/Golos-UI_Bold.ttf') format('truetype');
  }

  :root {
    --font-color: black;
    --font-base: "Golos";
    --font-secondary: "Golos Bold";
    --secondary-font-color: #433E82;
  }

  html,body {
    width: 100%;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  h1,h2,h3,h4,h5,h6,p,ul {
    margin: 0px;
    padding: 0px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

`
