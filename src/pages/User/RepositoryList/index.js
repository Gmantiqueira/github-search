import React, {useCallback, useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Container, Filters, Table, THeader, TRow} from './styles';

function RepositoryList() {
  return (
      <Container>
          <Filters>
              <span></span>
              <span></span>
          </Filters>
          <Table>
              <THeader>
                  <h3 className="text-gray-dark">Name</h3>
                  <h3 className="text-gray-dark">Language</h3>
                  <h3 className="text-gray-dark">Stars</h3>
              </THeader>
              <TRow>
                  <h3 className="text-gray-dark">github-search</h3>
                  <h3 className="text-gray-dark">JavaScript</h3>
                  <h3 className="text-gray-dark">2.1k</h3>
                  <FontAwesomeIcon icon={faAngleRight} size="2x"/>
              </TRow>
          </Table>
      </Container>
  );
}

export default RepositoryList;
