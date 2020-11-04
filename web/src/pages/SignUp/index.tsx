import React, { useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

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
  SignInLink,
  IconArrowLeft,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .min(3, '* No mínimo 3 digitos.')
            .required('* O nome é obrigatório'),
          email: Yup.string()
            .required('* O e-mail é obrigatório')
            .email('* Digite um email válido'),
          password: Yup.string()
            .min(6, '* No mínimo 6 digitos')
            .required('* A senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no GoBarber.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Faça seu cadastro</Title>

            <Input name="name" icon={FiUser} placeholder="Nome completo" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <SignInLink to="/">
            <IconArrowLeft /> Voltar para logon
          </SignInLink>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
