import styled from 'styled-components';

import { $blue } from '@/styles/colors';

export const Wrapper = styled.div`
    height: 16px;
    margin: auto;
    width: 70px;
    text-align: center;

    > div {
        background-color: ${$blue()};
        border-radius: ${({ size }) => `${size / 2}px`};
        height: ${({ size }) => `${size}px`};
        width: ${({ size }) => `${size}px`};

        display: inline-block;
        -webkit-animation: delay 1.4s infinite ease-in-out both;
        animation: delay 1.4s infinite ease-in-out both;
    }

    .dot1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }

    .dot2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }

    @-webkit-keyframes delay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
        }
    }

    @keyframes delay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
`;
