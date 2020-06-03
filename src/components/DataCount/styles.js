import styled from 'styled-components';

export const CountWrapper = styled.div`
    margin: 0 32px;
    width: 160px;
    h3 {
        margin-bottom: 4px;
    }

    a > h3 {
        transition: opacity ease 0.2s;
        &:hover {
            opacity: 0.7;
            transition: opacity ease 0.2s;
        }
    }
`;
