import styled from 'styled-components';

import { $grayDark } from '@/styles/colors';

export const Container = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 16px;

    @media screen and (min-width: 992px) {
        padding: 0 64px;
    }
`;

export const InputWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    height: ${({ isSearching }) => (isSearching ? '208px' : '100%')};

    transition: height ease-out 0.5s;
`;

export const SearchInput = styled.input`
    border-radius: 8px;
    max-width: 360px;
    width: 100%;

    margin: auto;
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
`;
