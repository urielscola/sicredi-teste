import React from 'react';
import Head from '../../components/Head';
import { GridContainer } from '../../components/Grid';
import Form from '../../components/Form';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import { Container } from './styles';
import useForm from '../../helpers/useForm';

const Login = () => {
  const [values, handleChange] = useForm({ username: '', password: '' });

  return (
    <GridContainer>
      <Container>
        <Head title="Login" />
        <Form
          header={
            <>
              <h2>Bem-vindo novamente!</h2>
              <p>Por favor, autentique-se abaixo.</p>
            </>
          }
          fields={
            <>
              <InputField
                name="username"
                label="Nome de usuário *"
                placeholder="Digite seu nome de usuário aqui"
                value={values.username}
                onChange={handleChange}
              />
              <InputField
                name="password"
                label="Senha *"
                type="password"
                placeholder="Digite sua senha aqui"
                value={values.password}
                onChange={handleChange}
              />
            </>
          }
          submit={<Button primary label="Entrar" />}
        />
      </Container>
    </GridContainer>
  );
};

export default Login;
