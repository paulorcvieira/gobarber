import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderContent,
  HeaderBack,
  HeaderBackIcon,
  HeaderBackText,
  Content,
  AnimationContainer,
  AvatarInput,
  Avatar,
  AvatarChange,
  AvatarChangeIcon,
  File,
  Title,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .min(3, '* No mínimo 3 digitos.')
            .required('* O nome é obrigatório'),
          email: Yup.string()
            .required('* O e-mail é obrigatório')
            .email('* Digite um email válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: value => !!value.length,
            then: Yup.string().min(6, '* No mínimo 6 digitos').required(),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('password', {
              is: value => !!value.length,
              then: Yup.string().min(6, '* No mínimo 6 digitos').required(),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], '* Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informações do perfil foram atualizadas com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: 'Ocorreu um erro ao atualizar perfil, tente novamente.',
        });
      }
    },
    [addToast, updateUser, history],
  );

  const handleAvatarChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const data = new FormData();

        data.append('avatar', event.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <HeaderBack to="/">
            <HeaderBackIcon /> <HeaderBackText>Voltar</HeaderBackText>
          </HeaderBack>
        </HeaderContent>
      </Header>

      <Content>
        <AnimationContainer>
          <AvatarInput>
            <Avatar src={user.avatar_url} alt={user.name} />
            <AvatarChange htmlFor="avatar">
              <AvatarChangeIcon />
              <File type="file" id="avatar" onChange={handleAvatarChange} />
            </AvatarChange>
          </AvatarInput>
          <Form
            ref={formRef}
            initialData={{
              name: user.name,
              email: user.email,
            }}
            onSubmit={handleSubmit}
          >
            <Title>Meu perfil</Title>

            <Input name="name" icon={FiUser} placeholder="Nome completo" />
            <Input name="email" icon={FiMail} placeholder="Email" />

            <Input
              containerStyle={{ marginTop: 24 }}
              name="old_password"
              type="password"
              icon={FiLock}
              placeholder="Senha atual"
            />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Nova senha"
            />
            <Input
              name="password_confirmation"
              type="password"
              icon={FiLock}
              placeholder="Confirmar senha"
            />

            <Button type="submit">Confirmar mudanças</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Profile;
