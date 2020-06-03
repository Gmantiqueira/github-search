import styled from 'styled-components';

import { $blue, $grayDark } from '@/styles/colors';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;

    @media screen and (min-width: 1279px) {
        flex-direction: row;
        height: calc(100% - 80px);
        padding: 32px 64px;
    }

    .divisor {
        display: none;
        @media screen and (max-width: 1279px) {
            background-color: ${$grayDark(60)};
            display: block;
            height: 1px;
            margin: 0 auto 40px;
            padding: 0 64px;
            width: calc(100% - 128px);
        }
    }
`;

export const Profile = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    padding: 16px;
    width: 100%;

    @media screen and (min-width: 1279px) {
        border-right: 1px solid ${$blue()};
        padding: 0;
        width: auto;
    }
`;
