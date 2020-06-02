import styled from 'styled-components';

import { $blue } from '@/styles/colors';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 16px;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
        height: calc(100% - 80px);
        padding: 32px 64px;
    }
`;

export const Profile = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    padding: 16px;

    @media screen and (min-width: 1280px) {
        border-right: 1px solid ${$blue()};
        padding: 0;
    }
`;
