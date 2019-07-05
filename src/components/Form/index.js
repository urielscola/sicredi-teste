import React from 'react';
import PropTypes from 'prop-types';
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  header: PropTypes.node.isRequired,
  fields: PropTypes.node.isRequired,
  submit: PropTypes.node.isRequired,
  error: PropTypes.bool
};
