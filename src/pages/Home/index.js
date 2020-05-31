import React, { useCallback, useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import api from '@/services/api';

import Card from '@/components/Card';
import Loader from '@/components/Loader';

import { Container, InputWrapper, SearchInput, UsersList } from './styles';

function Home() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [hasTyped, triggerTyped] = useState(false);
    const [users, setUsers] = useState([]);

    const debounceSearch = useDebounce(search, 1000);

    const getUsers = useCallback(async () => {
        try {
            const { data } = await api.get('search/users', {
                params: { q: search },
            });

            setUsers(data.items);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }, [search]);

    function searchHandler(value) {
        triggerTyped(true);
        // setSearch(value);
    }

    useEffect(() => {
        if (debounceSearch) {
            getUsers();
        } else {
            setLoading(false);
            setUsers([]);
        }
    }, [debounceSearch, getUsers]);

    return (
        <Container className="bg-gray-dark">
            <InputWrapper isSearching={hasTyped}>
                <SearchInput
                    type="text"
                    name="search"
                    onKeyUp={(e) => searchHandler(e.target.value)}
                />
            </InputWrapper>
            <UsersList>
                <Loader />
            </UsersList>
        </Container>
    );
}

export default Home;
