import React, { useEffect } from 'react';

import { ToastMessage, useToast } from '../../../hooks/toast';

import {
  Container,
  IconCheck,
  IconInfo,
  IconAlert,
  Content,
  Title,
  Message,
  Close,
  IconClose,
} from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  success: <IconCheck />,
  info: <IconInfo />,
  error: <IconAlert />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 2500);

    return () => clearTimeout(timer);
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || 'info']}

      <Content>
        <Title>{message.title}</Title>
        {message.description && <Message>{message.description}</Message>}
      </Content>

      <Close type="button" onClick={() => removeToast(message.id)}>
        <IconClose />
      </Close>
    </Container>
  );
};

export default Toast;
