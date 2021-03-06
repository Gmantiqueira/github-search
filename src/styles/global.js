import { createGlobalStyle } from 'styled-components';

import {
    $grayDark,
    $gray,
    $grayLight,
    $blue,
    $blueLight,
    $red,
    $redLight,
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
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 100%;
    }
    #root {
        flex: 1;
    }
    body {
        color: ${$grayDark()};
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
        background-color: ${$blue()};
        color: ${$blueLight()};
        cursor: pointer;

        align-items: center;
        border-radius: 8px;
        display: flex;

        border: 1px solid transparent;
        height: 40px;
        outline: 0;
        padding: 0 16px;

        transition: all ease-out .2s;

        &:hover {
            background-color: ${$blueLight()};
            border-color: ${$blue()};
            color: ${$blue()};

            transition: all ease-out .2s;
        }
    }

    h1 {
        font-size: 40px;
        @media screen and (min-width: 992px) {
            font-size: 48px;
        }
    }

    h2 {
        font-size: 26px;
        @media screen and (min-width: 992px) {
            font-size: 32px;
        }
    }

    h3 {
        font-size: 22px;
        @media screen and (min-width: 992px) {
            font-size: 24px;
        }
    }

    p {
        font-size: 16px;
    }

    /* Utils */

    .center {
        text-align: center;
    }

    .regular {
        font-weight: 400;
    }

    .medium {
        font-weight: 500;
    }

    .bold {
        font-weight: 700;
    }

    .text-gray-dark {
        color: ${$grayDark()};
    }
    .text-gray {
        color: ${$gray()};
    }
    .text-gray-light {
        color: ${$grayLight()};
    }
    .text-blue {
        color: ${$blue()};
    }
    .text-blue-light {
        color: ${$blueLight()};
    }
    .text-red {
        color: ${$red()};
    }
    .text-red-light {
        color: ${$redLight()};
    }

    .bg-gray-dark {
        background: ${$grayDark()};
    }
    .bg-gray {
        background: ${$gray()};
    }
    .bg-gray-light {
        background: ${$grayLight()};
    }
    .bg-blue {
        background: ${$blue()};
    }
    .bg-blue-light {
        background: ${$blueLight()};
    }
    .bg-red {
        background: ${$red()};
    }
    .bg-red-light {
        background: ${$redLight()};
    }

`;
