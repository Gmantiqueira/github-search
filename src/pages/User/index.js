import React, { useCallback, useEffect, useState } from 'react';

import Card from './Card';
import ErrorScreen from '@/components/ErrorScreen';
import Loader from '@/components/Loader';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';

import api from '@/services/api';

import { Container, Profile } from './styles';

function User({ history, match }) {
    const { username, reponame } = match.params;

    const [error, setError] = useState(false);
    const [user, setUser] = useState({});

    const [isDetailsVisible, toggleDetails] = useState(Boolean(reponame));
    const [loading, setLoading] = useState(true);

    const getUser = useCallback(async () => {
        try {
            const { data } = await api.get(`users/${username}`);

            setUser(data);
            setError(false);
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }, [username]);

    useEffect(() => {
        setLoading(true);
        getUser();
    }, [getUser]);

    return loading ? (
        <Loader />
    ) : error ? (
        <ErrorScreen>
            <h1>Internal Server Error</h1>
        </ErrorScreen>
    ) : (
        <Container className="bg-gray">
            <Profile>{loading ? <Loader /> : <Card user={user} />}</Profile>
            <span className="divisor" />

            {isDetailsVisible ? (
                <RepositoryDetails
                    history={history}
                    username={username}
                    reponame={reponame}
                    toggleDetails={toggleDetails}
                    toggleError={setError}
                />
            ) : (
                <RepositoryList
                    history={history}
                    username={username}
                    toggleDetails={toggleDetails}
                    toggleError={setError}
                />
            )}
        </Container>
    );
}

export default User;
