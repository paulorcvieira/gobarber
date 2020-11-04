import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

interface ContainerProps {
  type?: 'success' | 'info' | 'error';
  hasDescription: number;
}

const toastTypeVariations = {
  success: css`
    background: var(--color-toast-success);
    color: var(--color-toast-success-text);
  `,
  info: css`
    background: var(--color-toast-default);
    color: var(--color-toast-default-text);
  `,
  error: css`
    background: var(--color-toast-error);
    color: var(--color-toast-error-text);
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);

  display: flex;

  ${props => toastTypeVariations[props.type || 'info']};

  & + div {
    margin-top: 16px;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
    `}
`;

export const IconCheck = styled(FiCheckCircle)`
  width: 20px;
  height: 20px;

  margin: 4px 12px 0 0;
`;

export const IconInfo = styled(FiInfo)`
  width: 20px;
  height: 20px;

  margin: 4px 12px 0 0;
`;

export const IconAlert = styled(FiAlertCircle)`
  width: 20px;
  height: 20px;

  margin: 4px 12px 0 0;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.strong`
  flex: 1;
`;

export const Message = styled.p`
  margin-top: 4px;
  font-size: 14px;
  opacity: 0.8;
  line-height: 20px;
`;

export const Close = styled.button`
  position: absolute;
  right: 16px;
  top: 19px;
  opacity: 0.6;
  border: 0;
  background: transparent;
  color: inherit;
`;

export const IconClose = styled(FiXCircle)`
  width: 18px;
  height: 18px;

  margin-top: 0;
`;
