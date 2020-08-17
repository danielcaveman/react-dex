import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px f7f7f7; 
    }
    ::-webkit-scrollbar-thumb {
        background: #000000; 
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #000000; 
    }
`;
