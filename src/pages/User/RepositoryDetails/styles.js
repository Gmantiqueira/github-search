import styled from 'styled-components';
import { $blue, $gray, $grayDark, $yellow } from '@/styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;

    @media screen and (min-width: 1280px) {
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
    h3 {
        line-height: 1.5;
    }
    button {
        font-size: 24px;
        font-weight: 500;
        margin-top: 32px;
        svg {
            margin-right: 16px;
        }
    }
`;

export const DateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    width: 100%;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    width: 100%;
`;

export const GoBack = styled.div`
align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    > div {
        align-items: center;
        background-color: ${$blue()};
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        margin-right: 8px;
        width: 32px;

        transition: all ease .2s;

        svg.fa-angle-left {
            color: ${$gray()};
            height: 20px;
            margin-right: 2px;
            transition: all ease .2s;
            width: auto;
        }
    }
`;
