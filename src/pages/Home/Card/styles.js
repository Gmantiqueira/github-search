import styled from 'styled-components';

import { $blue } from '@/styles/colors';

export const Action = styled.h3`
    text-align: center;
    text-transform: uppercase;
    width: 100%;
`;

export const BlueLine = styled.span`
    background: ${$blue()};
    height: 1px;
    margin: 24px auto;
    width: 100%;
`;

export const CardWrapper = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 64px;
    max-width: 360px;
    padding: 24px;
    width: 100%;

    @media screen and (min-width: 992px) {
        margin: 0 32px 64px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .image-wrapper {
        height: 160px;
        margin: 0 auto;
        margin-bottom: 16px;
        width: 160px;
        img {
            border-radius: 8px;
            height: 100%;
            width: 100%;
        }
    }

    h2 {
        margin-bottom: 8px;
        word-break: break-all;
    }
`;
