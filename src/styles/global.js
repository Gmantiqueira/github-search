import { createGlobalStyle } from 'styled-components';

import {
    $grayDark,
    $gray,
    $grayLight,
    $blue,
    $blueLight,
    $yellow,
    $yellowLight,
    $red,
    $redLight,
    $green,
    $greenLight,
} from './colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #root {
        height: 100%;
        min-height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        color: #FFF;
        border: 0;
        cursor: pointer;
        outline: 0;
    }

    /* Utils */

    .text-gray-dark {
        color: ${$grayDark};
    }
    .text-gray {
        color: ${$gray};
    }
    .text-gray-light {
        color: ${$grayLight};
    }
    .text-blue {
        color: ${$blue};
    }
    .text-blue-light {
        color: ${$blueLight};
    }
    .text-yellow {
        color: ${$yellow};
    }
    .text-yellow-light {
        color: ${$yellowLight};
    }
    .text-green {
        color: ${$green};
    }
    .text-green-light {
        color: ${$greenLight};
    }
    .text-red {
        color: ${$red};
    }
    .text-red-light {
        color: ${$redLight};
    }

    .bg-gray-dark {
        background: ${$grayDark};
    }
    .bg-gray {
        background: ${$gray};
    }
    .bg-gray-light {
        background: ${$grayLight};
    }
    .bg-blue {
        background: ${$blue};
    }
    .bg-blue-light {
        background: ${$blueLight};
    }
    .bg-yellow {
        background: ${$yellow};
    }
    .bg-yellow-light {
        background: ${$yellowLight};
    }
    .bg-green {
        background: ${$green};
    }
    .bg-green-light {
        background: ${$greenLight};
    }
    .bg-red {
        background: ${$red};
    }
    .bg-red-light {
        background: ${$redLight};
    }
`;