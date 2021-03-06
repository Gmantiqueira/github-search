import styled from 'styled-components';

import { $grayDark } from '@/styles/colors';

export const Container = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: auto;
    overflow: hidden;
    overflow-y: auto;
    padding: 0 16px;

    @media screen and (min-width: 992px) {
        padding: 0 64px;
    }
`;

export const InputWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    min-height: ${({ isSearching }) => (isSearching ? '208px' : '100%')};

    transition: min-height ease-out 0.5s;
    div {
        margin: auto;
    }
`;

export const SearchInput = styled.input`
    border-radius: 8px;
    max-width: 360px;
    width: 100%;

    margin-bottom: 32px;
    padding: 8px 24px;

    color: ${$grayDark()};

    font-size: 24px;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${$grayDark(50)};
    }
    :-ms-input-placeholder {
        color: ${$grayDark(50)};
    }
`;

export const UsersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    > div {
        margin: 0 0 64px;
        @media screen and (min-width: 992px) {
            margin: 0 32px 64px;
        }
    }
`;
