import React from 'react';
import { Container, CustomButton } from './styles';

const Button = ({ label, ...props }) => {
  return (
    <Container>
      <CustomButton {...props}>{label}</CustomButton>
    </Container>
  );
};

export default Button;
