import styled from 'styled-components';
import { $grayDark } from '@/styles/colors';

export const CardWrapper = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
    width: 100%;

    @media screen and (min-width: 1279px) {
        margin-right: 64px;
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
        font-size: 16px;
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
        margin: 24px auto;
        svg {
            margin-right: 16px;
        }
        @media screen and (min-width: 1279px) {
            margin: 24px auto 0;
        }
    }
`;

export const Numbers = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`;
