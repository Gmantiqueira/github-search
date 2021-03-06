import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import api from '@/services/api';
import numFormatter from '@/utils/numFormatter';

import Loader from '@/components/Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    CustomSelect,
    Filters,
    Scroll,
    Table,
    THeader,
    TRow,
} from './styles';

const typeOptions = [
    { value: 'all', label: 'All' },
    { value: 'owner', label: 'Owner' },
    { value: 'member', label: 'Member' },
];

const sortOptions = [
    { value: 'created', label: 'Created' },
    { value: 'updated', label: 'Updated' },
    { value: 'pushed', label: 'Pushed' },
    { value: 'full_name', label: 'Name' },
];

const directionOptions = [
    { value: 'asc', label: 'Upward' },
    { value: 'desc', label: 'Downward' },
];

function RepositoryList({ history, username, toggleDetails, toggleError }) {
    const infiniteScroll = useRef();

    const [repositories, setRepositories] = useState([]);

    const [type, setType] = useState('');
    const [sort, setSort] = useState('');
    const [direction, setDirection] = useState('');

    const [page, setPage] = useState(1);

    const [hasMoreData, setHasMoreData] = useState(true);
    const [loading, setLoading] = useState(true);
    const [loadingPages, setLoadingPages] = useState(false);

    function loadRepository(reponame) {
        history.push(`/${username}/${reponame}`);
        toggleDetails(true);
    }

    useEffect(() => {
        setPage(1);
    }, [type, sort, direction]);

    const getRepositories = useCallback(async () => {
        try {
            const { data } = await api.get(`users/${username}/repos`, {
                params: { page, per_page: 30, type, sort, direction },
            });

            if (data.length === 0) {
                setHasMoreData(false);
            }

            if (page === 1 && sort === '') {
                const starsSorted = data.sort((a, b) => {
                    return b.stargazers_count - a.stargazers_count;
                });
                setRepositories(starsSorted);
            } else {
                setRepositories((userArray) => [...userArray, ...data]);
            }

            toggleError(false);
            setLoadingPages(false);
            setLoading(false);
        } catch (err) {
            toggleError(true);
            setLoadingPages(false);
            setLoading(false);
        }
    }, [type, sort, direction, page, username, toggleError]);

    useEffect(() => {
        setHasMoreData(true);
        setPage(1);
    }, [type, sort, direction]);

    useEffect(() => {
        getRepositories();
    }, [getRepositories]);

    useEffect(() => {
        if (!loading && infiniteScroll.current) {
            infiniteScroll.current.addEventListener('scroll', function () {
                if (
                    this.scrollTop + this.clientHeight >= this.scrollHeight &&
                    !loadingPages &&
                    hasMoreData
                ) {
                    setLoadingPages(true);
                    setPage((old) => old + 1);
                }
            });
        }
    }, [hasMoreData, loading, loadingPages]);

    return loading ? (
        <Loader />
    ) : (
        <Container>
            <Filters>
                <CustomSelect
                    classNamePrefix="react-select"
                    isSearchable={false}
                    name="type"
                    onChange={({ value }) => setType(value)}
                    options={typeOptions}
                    placeholder="Type"
                />
                <CustomSelect
                    classNamePrefix="react-select"
                    isSearchable={false}
                    name="sort"
                    onChange={({ value }) => setSort(value)}
                    options={sortOptions}
                    placeholder="Sort by"
                />
                <CustomSelect
                    classNamePrefix="react-select"
                    isSearchable={false}
                    name="direction"
                    onChange={({ value }) => setDirection(value)}
                    options={directionOptions}
                    placeholder="Direction"
                />
            </Filters>
            <Table>
                <THeader>
                    <h3 className="text-gray-dark">Name</h3>
                    <h3 className="text-gray-dark">Language</h3>
                    <h3 className="text-gray-dark">Stars</h3>
                </THeader>
                <Scroll ref={infiniteScroll}>
                    {loading ? (
                        <Loader />
                    ) : (
                        repositories.map(
                            ({ id, name, language, stargazers_count }) => (
                                <TRow
                                    key={id}
                                    onClick={() => loadRepository(name)}
                                >
                                    <p className="text-gray-dark">{name}</p>
                                    <p className="text-gray-dark">{language}</p>
                                    <p className="text-gray-dark">
                                        <FontAwesomeIcon icon={faStar} />
                                        {numFormatter(stargazers_count)}
                                    </p>
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        size="2x"
                                    />
                                </TRow>
                            )
                        )
                    )}
                    {loadingPages && (
                        <div className="loader-wrapper">
                            <Loader />
                        </div>
                    )}
                </Scroll>
            </Table>
        </Container>
    );
}

RepositoryList.propTypes = {
    history: PropTypes.shape().isRequired,
    username: PropTypes.string.isRequired,
    toggleDetails: PropTypes.func.isRequired,
    toggleError: PropTypes.func.isRequired,
};

export default RepositoryList;
