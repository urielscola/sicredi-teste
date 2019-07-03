import React from 'react';
import { Container, Input, Label } from './styles';

const InputField = ({
  value,
  name,
  type = 'text',
  label,
  required = true,
  placeholder,
  onChange
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        value={value}
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
};

export default InputField;
