import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    :root {
        --clr-bg: #ff7675;
        --fc-purple: #6c5ce7;
        --fc-white: #fff;
        --fc-green: #00b894;
    }

    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: var(--clr-bg);
        color: var(--fc-white);
        font-size: 16px;
    }
`

export default GlobalStyles;