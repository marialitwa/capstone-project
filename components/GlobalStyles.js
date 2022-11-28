import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
        font-family: "Quicksand";
        src: url("./fonts/Quicksand-VariableFont_wght.ttf");
    }
    
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * {
        box-sizing: border-box;
        background-color: #F5F4F4;     
    }
`;

export default GlobalStyles;
