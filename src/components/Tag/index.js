import React from 'react';
import PropTypes from 'prop-types';
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

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
