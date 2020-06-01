import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function Loader({ size }) {
    return (
        <Wrapper size={size}>
            <div className="dot1" />
            <div className="dot2" />
            <div className="dot3" />
        </Wrapper>
    );
}

Loader.propTypes = {
    size: PropTypes.number,
};

Loader.defaultProps = {
    size: 16,
};

export default Loader;
