import React from 'react';
import PropTypes from 'prop-types';

import { CountWrapper } from './styles';

function DataCount({ label, data }) {
    return (
        <CountWrapper>
            <h3 className="text-gray-dark center">{label}</h3>
            <h3 className="text-blue center regular">{data}</h3>
        </CountWrapper>
    );
}

DataCount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DataCount.defaultProps = {
    data: '',
};

export default DataCount;
