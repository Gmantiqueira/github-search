import React from 'react';
import PropTypes from 'prop-types';

import numFormatter from '@/utils/numFormatter';

import { CountWrapper } from './styles';

function DataCount({ label, data }) {
    const dataFormat = data
        ? typeof data === 'number' || parseInt(data)
            ? numFormatter(data)
            : data
        : 'N/A';

    return (
        <CountWrapper>
            <h3 className="text-gray-dark center">{label}</h3>
            <h2 className="text-blue center regular">{dataFormat}</h2>
        </CountWrapper>
    );
}

DataCount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DataCount;
