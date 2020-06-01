import React, { useCallback, useEffect, useState } from 'react';

import DataCount from '@/components/DataCount';
import Loader from '@/components/Loader';
import RepositoryList from './RepositoryList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import api from '@/services/api';

import { CardWrapper, Container, Profile, Numbers } from './styles';

const user = {
    name: 'Gabriel Antiqueira',
    email: 'gmantiqueira@gmail.com',
    followers: '2300',
    following: '689',
    bio:
        'Front-end Developer to Fullstack, a focused student and always on learning. I want to know how to develop anything that sounds fun. Always open to talk :)',
};

function User() {
    // const [user, setUser] = useState({});

    return (
        <Container className="bg-gray">
            <Profile>
                <CardWrapper>
                    <div className="image-wrapper">
                        <img
                            src={
                                user.avatar_url ||
                                'https://avatars3.githubusercontent.com/u/42946693?s=460&u=6ca5a72f5091772acd05e48ee03fd032064ef515&v=4'
                            }
                            alt={user.name}
                        />
                    </div>
                    <h2 className="center medium">
                        {user.name || 'Gabriel Antiqueira'}
                    </h2>
                    {user.email && (
                        <p className="center bold">
                            {user.email || 'gmantiqueira@gmail.com'}
                        </p>
                    )}
                    {(user.followers || user.following) && (
                        <Numbers>
                            <DataCount
                                label="Followers"
                                data={user.followers}
                            />
                            <DataCount
                                label="Following"
                                data={user.following}
                            />
                        </Numbers>
                    )}
                    {user.bio && (
                        <h3 className="text-gray-dark regular">{user.bio}</h3>
                    )}
                    <a target="_blank" href={user.html_url}>
                        <button className="bg-blue text-blue-light">
                            <FontAwesomeIcon icon={faExternalLinkAlt} /> See on
                            GitHub
                        </button>
                    </a>
                </CardWrapper>
            </Profile>

            <RepositoryList />
        </Container>
    );
}

export default User;
