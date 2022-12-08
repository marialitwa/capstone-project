import { createGlobalStyle, css } from "styled-components";

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
        background: var(--background-colors);
    }


    * {
        box-sizing: border-box;
    }


    :root {
        // ---- FONTS & SHADOWS ----
        --heading-fontsize: 1.9rem;
        --date-fontsize: 0.9rem;
        --date-fontweight: 200;
        --body-fontsize: 0.95rem;
        --body-fontweight: 200;
        --body-fontsize-small: 0.8rem;
        --primary-dropshadow: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.3));
        
       
        ${() =>
          new Date().getHours() <= 18 && new Date().getHours() >= 6
            ? // ---- MORNING COLOR THEME ----
              css`
                --text-primary-color: #4f4f4f;
                --text-secondary-color: #797979;
                --accent: #ff3870;
                --background-colors: linear-gradient(
                  90deg,
                  #faece0,
                  #fae6e0,
                  #f5e0ce,
                  #fbccc0
                );
                background-size: 300%;
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

                animation: gradient-bg 20s ease infinite;
                --calltoaction-colors-webkit: -webkit-gradient(
                  to right,
                  #ed928a 0%,
                  #f3e5ad 50%,
                  #ed928a 100%
                );
                --calltoaction-colors: linear-gradient(
                  to right,
                  #ed928a 0%,
                  #f3e5ad 50%,
                  #ed928a 100%
                );
              `
            : // ---- EVENING COLOR THEME ----
              css`
                --text-primary-color: #f3f3f3;
                --text-secondary-color: #d1ced5;
                --accent: #d6406a;
                --background-colors: linear-gradient(
                  90deg,
                  #987cb6,
                  #606a98,
                  #485074,
                  #323353
                );
                --calltoaction-colors-webkit: -webkit-gradient(
                  to right,
                  #d38680 0%,
                  #c695ff 50%,
                  #d38680 100%
                );
                --calltoaction-colors: linear-gradient(
                  to right,
                  #d38680 0%,
                  #c695ff 50%,
                  #d38680 100%
                );
              `}   
    }
`;

export default GlobalStyles;
