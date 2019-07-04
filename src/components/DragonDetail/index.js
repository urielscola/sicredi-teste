import React from 'react';
import { Container } from './styles';
import Form from '../Form';
import InputField from '../InputField';
import Button from '../Button';
import useForm from '../../helpers/useForm';

const DragonDetail = ({ isEditing, detail, loading }) => {
  const [values, handleChange] = useForm(
    isEditing ? detail : { name: '', type: '', createdAt: '' }
  );

  return (
    <Container>
      <Form
        header={
          <h2>Você está {isEditing ? 'editando' : 'criando'} um dragão.</h2>
        }
        fields={
          <>
            <InputField
              name="name"
              label="Nome do dragão *"
              placeholder="Digite o nome do dragão aqui"
              value={values.name}
              onChange={handleChange}
            />
            <InputField
              name="type"
              label="Tipo do Dragão *"
              placeholder="Digite o tipo do dragão aqui"
              value={values.type}
              onChange={handleChange}
            />
            <InputField
              name="createdAt"
              label="Data de criação do Dragão *"
              placeholder="Digite a data de criação do dragão aqui"
              value={values.createdAt}
              onChange={handleChange}
            />
          </>
        }
        submit={
          <>
            <Button primary label="Salvar" loading={loading} />
            <Button secundary label="Voltar" />
          </>
        }
      />
    </Container>
  );
};

export default DragonDetail;
