import styled from 'styled-components';
import { $blue, $gray, $grayDark, $yellow } from '@/styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;

    @media screen and (min-width: 1279px) {
        padding: 32px 64px 0;
    }
`;

export const Divisor = styled.span`
    background-color: ${$grayDark(60)};
    display: block;
    height: 1px;
    margin: 40px auto;
    padding: 0 64px;
    width: calc(100% - 128px);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Stars = styled.div`
    align-items: center;
    display: flex;
    svg {
        color: ${$yellow()};
        margin-right: 8px;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
    p {
        line-height: 1.5;
    }
`;

export const DateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    > div {
        margin: 0 auto;
        margin-bottom: 24px;
        &:last-of-type {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1279px) {
        flex-direction: row;
        > div {
            margin: 0;
        }
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    > div {
        margin: 0 auto;
        margin-bottom: 40px;
        &:last-of-type {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1279px) {
        flex-direction: row;
        > div {
            margin: 0 16px 32px;
            width: 25%;
        }
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 16px;
    width: 100%;
    button {
        font-size: 24px;
        font-weight: 500;
        margin: 0 auto 32px;
        svg {
            margin-right: 16px;
        }
    }

    .divisor {
        background-color: ${$grayDark(60)};
        display: block;
        height: 1px;
        margin: 40px auto 32px;
        padding: 0 64px;
        width: calc(100% - 128px);
    }

    @media screen and (min-width: 1279px) {
        flex-direction: row;
        button {
            margin: 0;
        }
        .divisor {
            display: none;
        }
    }
`;

export const GoBack = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    order: 2;
    > div {
        align-items: center;
        background-color: ${$blue()};
        border: 1px solid transparent;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        margin-right: 8px;
        width: 32px;

        transition: all ease 0.2s;

        svg.fa-angle-left {
            color: ${$gray()};
            height: 20px;
            margin-right: 2px;
            transition: all ease 0.2s;
            width: auto;
        }

        &:hover {
            background-color: ${$gray()};
            border-color: ${$blue()};
            svg.fa-angle-left {
                color: ${$blue()};
            }
        }
    }
`;
