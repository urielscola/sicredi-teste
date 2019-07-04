import React from 'react';
import { Container, Label, Value } from './styles';

const Tag = ({ label, value }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};

export default Tag;
