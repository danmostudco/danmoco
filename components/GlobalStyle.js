import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

import {colors, spacing} from '../styles/vars';

const code = `
    background-color: #F5F7FA;
    color: #323F4B;
    border-radius: 2px;
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 14px;
`;

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Inter';
        src: url("/static/fonts/Inter-Light.otf") format('opentype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url("/static/fonts/Inter-LightItalic.otf") format('opentype');
        font-weight: 300;
        font-style: italic;
    }

    @font-face {
        font-family: 'Inter';
        src: url("/static/fonts/Inter-Regular.otf") format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url("/static/fonts/Inter-Medium.otf") format('opentype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url("/static/fonts/Inter-Semibold.otf") format('opentype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url("/static/fonts/Inter-Bold.otf") format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url("/static/fonts/Inter-ExtraBold.otf") format('opentype');
        font-weight: 800;
        font-style: normal;
    }

    ::selection {
        background-color: #ff5252;
        color: #fefefe;
    }
    
    html {
        box-sizing: border-box;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        min-width: 320px;
        scroll-behavior: smooth;

        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
    }

    body {
        background-color: #fff;
        color: ${colors.text};
        font-size: 15px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        line-height: 1.65;
        text-rendering: optimizeLegibility;
    }

    table {  
        color: #333;
        width: 100%; 
        border-collapse: 
        collapse; border-spacing: 0; 
    }
    
    td, th {  
        height: 30px; 
    }
    
    thead {
        background: #f5f5f5;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: 0.9rem;
    }

    th {  
        font-weight: 500;
        text-align: left;
        padding: 5px;
    }
    
    td {  
        padding: 5px;
        text-align: left;
    }

    tr {
        border-bottom: 1px solid #ccc;
    }

    a {
        color: ${colors.text};
        cursor: pointer;
    }

    p {
        margin: 1.5em 0;
        letter-spacing: -0.2px;
    }

    li {
        letter-spacing: -0.2px;
    }

    code {
        background-color: #F5F7FA;
        color: #323F4B;
        border-radius: 3px;
        font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 14px;
        padding: .2em .4em;
    }

    pre {
        line-height: 1.4em;
        margin: 0 0 ${spacing.normal};
        overflow-x: auto;
        padding: ${spacing.normal};
        white-space: pre;
        background: #2d2d2d;

        code {
            padding: 0;
        }
    }

    hr {
        border: 0;
        margin: ${spacing.large};
        text-align: center;

        &::before {
            content: '...';
            display: inline-block;
            letter-spacing: 1em;
            line-height: 1;
        }
    }
    
    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    @media (min-width: 768px) {
        body {
            font-size: 18px;
        }

        code, pre {
            font-size: 16px;
        }
    }
`;

export default GlobalStyle;
