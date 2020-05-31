import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import DataCount from '../DataCount';

import { Action, BlueLine, CardWrapper, Numbers } from './styles';

function Card({ user, loading }) {
    const { avatar_url, bio, email, followers, following, login, name } = user;

    return (
        <CardWrapper className="bg-blue-light">
            <div className="image-wrapper">
                <img
                    src={
                        avatar_url ||
                        'https://avatars3.githubusercontent.com/u/42946693?s=460&u=6ca5a72f5091772acd05e48ee03fd032064ef515&v=4'
                    }
                    alt={name}
                />
            </div>
            <h2 className="center medium">{name || login}</h2>
            {email && <p className="center bold">{email}</p>}
            {(followers || following) && (
                <Numbers>
                    <DataCount label="Followers" data={followers} />
                    <DataCount label="Following" data={following} />
                </Numbers>
            )}
            {bio && <h3 className="text-gray-dark regular">{bio}</h3>}
            <BlueLine />
            <Link to={`/user/${login}`}>
                <Action className="text-blue">View Profile</Action>
            </Link>
        </CardWrapper>
    );
}

Card.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.shape(),
};

Card.defaultProps = {
    loading: false,
    user: {},
};

export default Card;
