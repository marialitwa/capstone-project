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
    
    }

    body {
       
        /* background: linear-gradient(120deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%); */
        background: linear-gradient(90deg, #faece0, #fae6e0, #f5e0ce, #fbccc0);
        background-size: 300%;
        animation: gradient-bg 20s ease infinite ;
        color: var(--darkgrey)
        
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
        
        --darkgrey: #4f4f4f;
        --grey: #797979;
        --heading-fontsize: 1.9rem;
        --date-fontsize: 0.9rem;
        --date-fontweight: 200;
        --body-fontsize: 0.95rem;
        --body-fontweight: 200;
        --body-fontsize-small: 0.8rem;
        --primary-dropshadow: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.3));

        // Usage: button shadow + fav icon
         --pink-highlight: #ff3870;
        

    }
`;

export default GlobalStyles;

// ---- ALL COLOR PALETTES ----

// ---- IN USE: GLOBAL COLOR PALETTE -----

// ---- OPTIONS: GLOBAL COLOR PALETTE -----
// darkgray: #434343
// background-color lightgray: #F5F4F4

// ---- BUTTON COLOR PALETTE -----
// $green: #a2ccb6
// $light-peach: #ffecd9
// $peach: #ee786e
// lighter peach: #ed928a
// $sand: #fceeb5
// sand darker: #f3e5ad;
// $white: #fff
// light-yellow: #fff3c1

// ---- IN USE: GRADIENT COLOR PALETTE -----
// #faece0
// #fae6e0
// #f5e0ce
// #fbccc0

// ---- OPTIONS: GRADIENT COLOR PALETTE -----
// #f5d3ce
