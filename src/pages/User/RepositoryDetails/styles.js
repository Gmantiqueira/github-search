import styled from 'styled-components';
import { $grayDark, $yellow } from '@/styles/colors';

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
    margin-top: 40px;
    width: 100%;
    > * {
        line-height: 1.5;
    }
`;

export const DateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;
