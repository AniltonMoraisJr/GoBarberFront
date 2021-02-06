import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const handleSubmit = useCallback(
    async (data: FormData) => {
      formRef?.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'No mínimo 6 digitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await api.post('/users', data);
        addToast({
          title: 'Usuário registrado',
          type: 'success',
        });
        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef?.current?.setErrors(errors);
      }
    },
    [history, addToast]
  );
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber Logo" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu cadastro</h1>
            <Input
              icon={FiUser}
              type="text"
              name="name"
              placeholder="Usuário"
            />
            <Input
              icon={FiMail}
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
              isPassword
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
