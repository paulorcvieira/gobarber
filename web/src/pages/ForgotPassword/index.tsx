import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  Logo,
  Title,
  Background,
  SignUpLink,
  IconSignUp,
} from './styles';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('* O e-mail é obrigatório')
            .email('* Digite um email válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('password/forgot', { email: data.email });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description:
            'Enviamos um email para confirmar a recuperação de senha, cheque sua caixa de entrada.',
        });

        // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Recuperar senha</Title>

            <Input name="email" icon={FiMail} placeholder="Email" />

            <Button type="submit">
              {loading ? 'Carregando' : 'Recuperar'}
            </Button>
          </Form>

          <SignUpLink to="/">
            <IconSignUp /> Voltar ao logon
          </SignUpLink>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
