import React from 'react';

import ErrorScreen from '@/components/ErrorScreen';

function Error404() {
    return (
        <ErrorScreen>
            <h1>404</h1>
            <h1>Not Found</h1>
        </ErrorScreen>
    );
}

export default Error404;
