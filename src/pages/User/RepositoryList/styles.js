import styled from 'styled-components';
import {$grayDark, $gray} from '@/styles/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 64px;
    width: 100%;
`

export const Filters = styled.div`
    display: flex;
    margin-top: 32px;
    justify-content: space-between;
`

export const Table = styled.div`
    margin-top: 40px;
    width: 100%;
`

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
            flex: 1;
        }
    }
`

export const TRow = styled.div`
    background-color: ${$grayDark(10)};
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    margin-top: 16px;
    padding: 8px 24px;
    width: 100%;

    transition: background-color ease .2s;

    &:hover {
        background-color: ${$grayDark(30)};
        transition: background-color ease .2s;
    }

    h3 {
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
            display: flex;
            justify-content: flex-end;
            flex: 1;
            margin-right: 24px;
        }
    }
`
