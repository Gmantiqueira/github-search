import styled from 'styled-components';
import { $grayDark, $yellow } from '@/styles/colors';

import ReactSelect from 'react-select';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;

    @media screen and (min-width: 1279px) {
        padding: 32px 64px 0;
    }
`;

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    > * {
        margin-bottom: 24px;
    }
`;

export const Table = styled.div`
    width: 100%;
`;

export const THeader = styled.div`
    border-bottom: 1px solid ${$grayDark()};
    display: flex;
    padding: 8px 24px;
    width: 100%;

    h3 {
        &:nth-child(1) {
            flex: 3;
        }
        &:nth-child(2) {
            flex: 3;
        }
        &:nth-child(3) {
            display: none;
            flex: 1;
            margin-right: 57px;
            @media screen and (min-width: 768px) {
                display: inline;
            }
        }
    }
`;

export const Scroll = styled.div`
    @media screen and (min-width: 768px) {
        max-height: 480px;
        overflow: hidden;
        overflow-y: scroll;
    }
`;

export const TRow = styled.div`
    background-color: ${$grayDark(20)};
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    margin-top: 16px;
    padding: 8px 24px;
    width: 100%;

    transition: background-color ease 0.2s;

    &:hover {
        background-color: ${$grayDark(40)};
        transition: background-color ease 0.2s;
    }

    p {
        font-weight: 400;
        &:nth-child(1) {
            align-items: center;
            display: flex;
            flex: 3;
        }
        &:nth-child(2) {
            align-items: center;
            display: flex;
            flex: 3;
        }
        &:nth-child(3) {
            align-items: center;
            display: none;
            flex: 1;
            margin-right: 24px;
            svg {
                color: ${$yellow()};
                margin-right: 8px;
            }
            @media screen and (min-width: 768px) {
                display: flex;
            }
        }

        @media screen and (min-width: 768px) {
            font-size: 24px;
        }
    }
`;

export const CustomSelect = styled(ReactSelect)`
    .react-select__placeholder {
        color: ${$grayDark()};
        font-size: 16px;
    }
    .react-select__indicator-separator {
        display: none;
    }
    .react-select__indicator {
        color: ${$grayDark()};
    }
    .react-select__control {
        border-color: ${$grayDark(40)};
        border-radius: 8px;
        height: 40px;
        width: 200px;
    }
`;
