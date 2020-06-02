import React from 'react';
import PropTypes from 'prop-types';

import numFormatter from '@/utils/numFormatter';

import { CountWrapper } from './styles';

function DataCount({ label, data, link }) {
    return (
        <CountWrapper>
            <h3 className="text-gray-dark center">{label}</h3>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-blue center regular">{data}</h2>
                </a>
            ) : <h2 className="text-blue center regular">{data}</h2>}
        </CountWrapper>
    );
}

DataCount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    link: PropTypes.string,
};

DataCount.defaultProps = {
    link: '',
};

export default DataCount;
