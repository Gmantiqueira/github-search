import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container className="bg-blue">
            <Link to="/">
                <h1 className="text-blue-light">GitHub Search</h1>
            </Link>
        </Container>
    );
}

export default Header;
