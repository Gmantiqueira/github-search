import styled from 'styled-components';

import { $blue, $grayDark } from '@/styles/colors';

export const Container = styled.div`
    display: flex;
    height: 100%;
    padding: 32px 64px;
`;

export const Profile = styled.div`
    align-items: center;
    border-right: 1px solid ${$blue()};
    display: flex;
    position: relative;
`;

export const CardWrapper = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-right: 64px;
    max-width: 400px;
    width: 100%;

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
        color: ${$grayDark(50)};
        margin-bottom: 32px;
    }
    button {
        font-size: 24px;
        font-weight: 500;
        margin: 24px auto 0;
        svg {
            margin-right: 16px;
        }
    }
`;

export const Numbers = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`;
