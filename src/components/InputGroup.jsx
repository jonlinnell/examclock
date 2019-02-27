import React from 'react';
import styled from 'styled-components';

import { commonTransitions } from '../style/fragments';

const InputGroup = styled.div`
  border: 1px solid ${({ theme }) => theme.colours.subtleOutline};
  border-radius: 4px;

  color: ${({ theme }) => theme.colours.textPrimary};
  background-color: ${({ theme }) => theme.colours.background};

  margin-left: 12px;
  padding: 0 8px;
  height: 32px;

  font-size: 0.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  ${commonTransitions}
`;

const Label = styled.span`
  margin-right: 6px;
`;

export default ({ label, children }) => (
  <InputGroup>
    <Label>{label}</Label>
    {children}
  </InputGroup>
);
