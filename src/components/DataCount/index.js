import React from 'react';

import { CountWrapper } from './styles';

function DataCount({ label, data }) {
    return (
        <CountWrapper>
            <h3 className="text-gray-dark center">{label}</h3>
            <h2 className="text-blue center regular">{data || 'N/A'}</h2>
        </CountWrapper>
    );
}

export default DataCount;
