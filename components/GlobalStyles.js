import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
        font-family: "Quicksand";
        src: url("/fonts/Quicksand-VariableFont_wght.ttf");
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: var(--background);
    }


    * {
        box-sizing: border-box;
    }

    /* body {
        
        background: var(--background-animation);

        // ---- MORNING BACKGROUND GRADIENT ------
        /* background: linear-gradient(90deg, #faece0, #fae6e0, #f5e0ce, #fbccc0);
        background-size: 300%;
        animation: gradient-bg-morning 20s ease infinite ;
        color: var(--text-primary)
    }
    @keyframes gradient-bg-morning {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    } */


    // ---- EVENING BACKGROUND GRADIENT ------

    // #667eea
    // #764ba2
    // #58649c
    // #6674b4
    // #ba9ed7

        /* background: linear-gradient(90deg, #987cb6, #606a98, #485074, #323353);
        background-size: 500%;
        animation: gradient-bg-evening 20s ease infinite ;
        color: var(--lightgrey);
        
    }
    @keyframes gradient-bg-evening {
    0% {
        background-position: 0% 50%;
    }
    25% {
        background-position: 50% 100%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    } 
    
}*/
    
    :root {
        // ---- FONTS & SHADOWS ----
        --heading-fontsize: 1.9rem;
        --date-fontsize: 0.9rem;
        --date-fontweight: 200;
        --body-fontsize: 0.95rem;
        --body-fontweight: 200;
        --body-fontsize-small: 0.8rem;
        --primary-dropshadow: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.3));
        
        // ---- MORNING COLOR THEME ----
        --text-primary: #4f4f4f;    
        --text-secondary: #797979;                                
        --accent: #ff3870;  // Usage: former button shadow + fav icon
        --background-animation:linear-gradient(90deg, #faece0, #fae6e0, #f5e0ce, #fbccc0);
        background-size: 300%;
        animation: gradient-bg-morning 2s ease infinite ;
        _color: var(--text-primary)
        
    }

    @keyframes gradient-bg-morning {
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
        // ----  EVENING COLOR THEME ----   
        
        [data-theme="dark"] {
       --text-primary: #F3F3F3;
       --text-secondary: #D1CED5;
       --accent: #D6406A;
    
       --background-animation:linear-gradient(90deg, #987cb6, #606a98, #485074, #323353);
        
       
       
    }
  
        

        /* BUTTON MORNING COLORS:
          background: -webkit-gradient(to right, #ed928a 0%, #f3e5ad 50%, #ed928a 100%);

        BUTTON EVENING COLORS:        
        BACKGROUND GRADIENT ?  */

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
