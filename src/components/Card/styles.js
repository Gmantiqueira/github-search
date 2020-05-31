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
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 0 0 64px;
    max-width: 360px;
    padding: 24px;
    width: 100%;

    transform: scale(1);
    transition: transform ease 0.2s;

    @media screen and (min-width: 992px) {
        margin: 0 32px 64px;
    }

    &:hover {
        transform: scale(1.05);
        transition: transform ease 0.2s;
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

    > h3 {
        line-height: 1.5;
    }

    > h2 {
        margin-bottom: 8px;
    }

    > p {
        margin-bottom: 32px;
    }
`;

export const Numbers = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`;
