import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-orange-500);
  height: 56px;
  border-radius: 9px;
  border: 0;
  padding: 0 16px;
  color: var(--color-button-text);
  font-weight: 500;
  width: 100%;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-orange-400);
  }
`;
