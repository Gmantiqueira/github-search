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
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    const debounceSearch = useDebounce(search, 1000);

    const getUsers = useCallback(async () => {
        try {
            const { data } = await api.get('search/users', {
                params: { q: search, page, per_page: 12 },
            });

            if (page === 1) {
                setUsers(data.items);
            } else {
                setUsers((userArray) => [...userArray, ...data.items]);
            }

            setLoadingPages(false);
            setLoading(false);
        } catch (err) {
            setLoadingPages(false);
            setLoading(false);
        }
    }, [page, search]);

    function searchHandler(value) {
        triggerTyped(true);
        setSearch(value);
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
                console.log('teste');
                if (
                    this.scrollTop + this.clientHeight >= this.scrollHeight &&
                    !loadingPages
                ) {
                    setLoadingPages(true);
                    setPage((old) => old + 1);
                }
            });
        }
    }, [loadingPages]);

    return (
        <Container ref={infiniteScroll} className="bg-gray-dark">
            <InputWrapper isSearching={hasTyped}>
                <SearchInput
                    type="text"
                    name="search"
                    onKeyUp={(e) => searchHandler(e.target.value)}
                />
            </InputWrapper>
            <UsersList>
                {loading ? (
                    <Loader />
                ) : (
                    users.map((user) => <Card user={user} key={user.id} />)
                )}
            </UsersList>
            {loadingPages && <Loader />}
        </Container>
    );
}

export default Home;
