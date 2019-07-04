import React from 'react';
import { Container, FormHeader, FormBody, Error } from './styles';

const Form = ({ onSubmit, header, fields, submit, error, ...props }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <Container onSubmit={handleSubmit} {...props}>
      {header && <FormHeader>{header}</FormHeader>}
      <FormBody>{fields}</FormBody>
      {submit}
      {error && <Error>Nome de usuário ou senha inválidos.</Error>}
    </Container>
  );
};

export default Form;
