import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {format} from 'date-fns';

import DataCount from '@/components/DataCount';
import Loader from '@/components/Loader';

import api from '@/services/api';
import numFormatter from '@/utils/numFormatter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExternalLinkAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import {
    Actions,
    Container,
    DateWrapper,
    Description,
    Divisor,
    GoBack,
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

    function GoBackHandler() {
        console.log('goback')
    }

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
                <a target="_blank" rel="noopener noreferrer" href={repository.html_url}>
                    <button className="bg-blue text-blue-light">
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> See on GitHub
                    </button>
                </a>
            </Description>
            <Divisor />
            <DateWrapper>
                <DataCount label="Created at" data={format(new Date(repository.created_at), 'dd/MM/yyyy')} />
                <DataCount label="Last update" data={format(new Date(repository.updated_at), 'dd/MM/yyyy')} />
                <DataCount label="Last push" data={format(new Date(repository.pushed_at), 'dd/MM/yyyy')} />
            </DateWrapper>
            <Divisor />
            <InfoWrapper>
                <DataCount label="Language" data={repository.language} />
                <DataCount label="Forks" data={repository.forks_count} />
                <DataCount label="Watchers" data={repository.watchers_count} />
            </InfoWrapper>
            <InfoWrapper>
                <DataCount label="Issues" data={repository.open_issues_count} />
                <DataCount label="Subscribers" data={repository.subscribers_count} />
                <DataCount label="HomePage" data={repository.homepage ? 'Click here!' : 'N/A'} link={repository.homepage || undefined} />
            </InfoWrapper>
            <Actions>
                <GoBack onClick={GoBackHandler}>
                    <div>
                        <FontAwesomeIcon icon={faAngleLeft} size={16}/>
                    </div>
                    <h3 className="text-blue medium">Go back to repositories</h3>
                </GoBack>
            </Actions>
        </Container>
    );
}

export default RepositoryDetails;
