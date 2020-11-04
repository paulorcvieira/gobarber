import styled, { css } from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-input);
  border-radius: 9px;
  padding: 16px;
  width: 100%;

  border: 2px solid var(--color-input);
  color: var(--color-input-placeholder);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-error);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-orange-500);
      border-color: var(--color-orange-500);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-orange-500);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-input-text);

    &::placeholder {
      color: var(--color-input-placeholder);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const IconError = styled(FiAlertCircle)`
  width: 20px;
  height: 20px;
  color: var(--color-error);
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--color-error);
    color: var(--color-white-900);

    &::before {
      border-color: var(--color-error) transparent;
    }
  }
`;
