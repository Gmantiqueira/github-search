import React, { useCallback, useEffect, useRef, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import api from '@/services/api';

import Card from './Card';
import Loader from '@/components/Loader';

import { Container, InputWrapper, SearchInput, UsersList } from './styles';

function Home() {
    const [hasTyped, triggerTyped] = useState(false);
    const [loadingPages, setLoadingPages] = useState(false);
    const [loading, setLoading] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(true);

    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    const debounceSearch = useDebounce(search, 1000);

    const getUsers = useCallback(async () => {
        try {
            const { data } = await api.get('search/users', {
                params: { q: search, page, per_page: 12 },
            });

            if (!data.length) {
                setHasMoreData(false);
            }

            if (page === 1) {
                if (!data.items.length) {
                    setError('No results');
                }
                setUsers(data.items);
            } else {
                setUsers((userArray) => [...userArray, ...data.items]);
            }

            setLoadingPages(false);
            setLoading(false);
        } catch (err) {
            setLoadingPages(false);
            setLoading(false);
            setError('Internal Server Error');
        }
    }, [page, search]);

    function searchHandler(value) {
        setLoading(true);
        triggerTyped(true);
        setPage(1);
        setSearch(value);
        if (!value) {
            setError('Please enter at least one character');
        }
    }

    useEffect(() => {
        if (debounceSearch) {
            getUsers();
        } else {
            setLoading(false);
            setUsers([]);
        }
    }, [debounceSearch, getUsers]);

    const infiniteScroll = useRef();

    useEffect(() => {
        if (infiniteScroll.current) {
            infiniteScroll.current.addEventListener('scroll', function () {
                if (
                    this.scrollTop + this.clientHeight >= this.scrollHeight &&
                    !loadingPages &&
                    !loading &&
                    hasMoreData
                ) {
                    setLoadingPages(true);
                    setPage((old) => old + 1);
                }
            });
        }
    }, [hasMoreData, loading, loadingPages]);

    return (
        <Container ref={infiniteScroll} className="bg-gray-dark">
            <InputWrapper isSearching={hasTyped}>
                <div>
                    <SearchInput
                        type="text"
                        name="search"
                        placeholder="Search for users"
                        onKeyUp={(e) => searchHandler(e.target.value)}
                    />
                    {loading && <Loader />}
                </div>
            </InputWrapper>
            <UsersList>
                {users.map((user) => (
                    <Card user={user} key={user.id} />
                ))}
                {error && <h1 className="text-red">{error}</h1>}
            </UsersList>
            {loadingPages && <Loader />}
        </Container>
    );
}

export default Home;
