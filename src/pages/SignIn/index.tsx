import React from 'react';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber Logo" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
            isPassword
          />
          <Button type="submit">Entrar</Button>
          <a href="/">Esqueci minha senha</a>
        </Form>
        <Link to="/signUP">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
