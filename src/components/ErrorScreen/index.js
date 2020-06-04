import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ErrorScreen({ children }) {
    return <Container>{children}</Container>;
}

ErrorScreen.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
}

export default ErrorScreen;
