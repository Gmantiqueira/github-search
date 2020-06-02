import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DataCount from '@/components/DataCount';
import Loader from '@/components/Loader';

import api from '@/services/api';
import numFormatter from '@/utils/numFormatter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    DateWrapper,
    Description,
    Divisor,
    Header,
    InfoWrapper,
    Stars,
} from './styles';

function RepositoryDetails({ username, reponame, toggleError }) {
    const [loading, setLoading] = useState(true);
    const [repository, setRepository] = useState([]);

    const getRepository = useCallback(async () => {
        try {
            const { data } = await api.get(`repos/${username}/${reponame}`);

            setRepository(data);

            toggleError(false);
            setLoading(false);
        } catch (err) {
            toggleError(true);
            setLoading(false);
        }
    }, [username]);

    useEffect(() => {
        getRepository();
    }, [getRepository]);

    return loading ? (
        <Loader />
    ) : (
        <Container>
            <Header>
                <h1>{'github-search'}</h1>
                <Stars>
                    <h1>
                        <FontAwesomeIcon icon={faStar} />
                        {numFormatter(315600)}
                    </h1>
                </Stars>
            </Header>
            <Description>
                <h3>
                    {
                        'Interface que utiliza a API do Github para buscar usuários e mostrar seus respectivos dados.'
                    }
                </h3>
            </Description>
            <Divisor />
            <DateWrapper>
                <DataCount label="Created at" data={'27/06/2017'} />
                <DataCount label="Last update" data={'27/05/2020'} />
                <DataCount label="Last push" data={'27/09/2019'} />
            </DateWrapper>
            <Divisor />
            <InfoWrapper>
                <DataCount label="Language" data={'JavaScript'} />
                <DataCount label="Forks" data={63} />
                <DataCount label="Watchers" data={68550} />
            </InfoWrapper>
            <InfoWrapper>
                <DataCount label="Issues" data={466} />
                <DataCount label="Subscribers" data={59} />
                <DataCount label="HomePage" data={'Click here!'} link />
            </InfoWrapper>
        </Container>
    );
}

export default RepositoryDetails;
