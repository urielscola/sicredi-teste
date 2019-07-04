import React from 'react';
import { Redirect } from 'react-router-dom';
import Head from '../../components/Head';
import { GridContainer } from '../../components/Grid';
import Form from '../../components/Form';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import { Container } from './styles';
import useForm from '../../helpers/useForm';
import { isAuthenticated } from '../../helpers/auth';
import { withUser } from '../../containers';

const Login = ({ loginStart, setError, loading, error }) => {
  const [values, handleChange] = useForm({ username: '', password: '' });
  if (isAuthenticated()) return <Redirect to="/" />;

  return (
    <GridContainer>
      <Container>
        <Head title="Login" />
        <Form
          maxWidth="500px"
          onSubmit={() => loginStart({ ...values })}
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
                error={error}
                onFocus={() => setError(false)}
              />
              <InputField
                name="password"
                label="Senha *"
                type="password"
                placeholder="Digite sua senha aqui"
                value={values.password}
                onChange={handleChange}
                error={error}
                onFocus={() => setError(false)}
              />
            </>
          }
          submit={<Button primary label="Entrar" loading={loading} />}
          error={error}
        />
      </Container>
    </GridContainer>
  );
};

export default withUser(Login);
