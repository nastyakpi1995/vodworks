import {createGlobalStyle} from "styled-components";
export default createGlobalStyle`
  :root {
    --background: #1f2229;
    --transparent: transparent;
    --background2: #2e303c;
    --background-button: #373945;
    --background-button2: #4b4d59;
    --orange: #ce8163;
    --blue: #3499ce;
    --gray: #bec2c6;
    --white: #fbfbfb;
  }

  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: #fbfbfb;
    background: var(--background);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  input,
  textarea {
    font-family: 'Poppins', sans-serif !important;;
  }

  button {
    cursor: pointer;
  }

`