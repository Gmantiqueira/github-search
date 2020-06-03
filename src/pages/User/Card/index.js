import React from 'react';
import PropTypes from 'prop-types';

import DataCount from '@/components/DataCount';
import { CardWrapper, Numbers } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Card({ user }) {
    console.log(user);
    return (
        <CardWrapper>
            <div className="image-wrapper">
                <img src={user.avatar_url} alt={user.name} />
            </div>
            <h2 className="center medium">{user.name}</h2>
            {user.email && <p className="center bold">{user.email}</p>}
            <Numbers>
                <DataCount label="Followers" data={user.followers} />
                <DataCount label="Following" data={user.following} />
            </Numbers>
            {user.bio && <h3 className="text-gray-dark">{user.bio}</h3>}
            <a target="_blank" rel="noopener noreferrer" href={user.html_url}>
                <button className="bg-blue text-blue-light">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> See on GitHub
                </button>
            </a>
        </CardWrapper>
    );
}

Card.propTypes = {
    user: PropTypes.shape().isRequired,
};

export default Card;
