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
        _background-color: #F5F4F4; 
    
    }

    body {
        /* #fbccc0, #f5d3ce */
        /* background: linear-gradient(120deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%); */
        background: linear-gradient(90deg, #faece0, #fae6e0, #f5e0ce, #fbccc0);
        background-size: 400%;
        animation: gradient-bg 20s ease infinite ;
        color: var(--darkgrey)
        /* color: #434343; */
    }
    @keyframes gradient-bg {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
    }

    :root {
        /* --darkgrey: #434343; */
        --darkgrey: #4f4f4f;
        --grey: #797979;
        --heading-fontsize: 1.9rem;


    }
`;

export default GlobalStyles;
