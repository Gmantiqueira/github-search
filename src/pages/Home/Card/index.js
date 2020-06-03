import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Action, BlueLine, CardWrapper } from './styles';

function Card({ user }) {
    const { avatar_url, login, name } = user;

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
            <BlueLine />
            <Link to={`/${login}`}>
                <Action className="text-blue">View Profile</Action>
            </Link>
        </CardWrapper>
    );
}

Card.propTypes = {
    user: PropTypes.shape(),
};

Card.defaultProps = {
    user: {},
};

export default Card;
