import React from 'react';
import { Container, FormHeader, FormBody } from './styles';

const Form = ({ header, fields, submit }) => {
  return (
    <Container>
      {header && <FormHeader>{header}</FormHeader>}
      <FormBody>{fields}</FormBody>
      {submit}
    </Container>
  );
};

export default Form;
