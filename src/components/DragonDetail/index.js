import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Container } from './styles';
import Form from '../Form';
import Loader from '../Loader';
import InputField from '../InputField';
import Button from '../Button';
import useForm from '../../helpers/useForm';
import { now, toDate } from '../../helpers/datetime';
import { withDragons } from '../../containers';

export const DragonDetail = ({
  isEditing,
  resourceId,
  detail,
  loading,
  error,
  getDragonDetail,
  getDragonDetailSuccess,
  createDragon,
  updateDragon,
  deleteDragon,
  ...props
}) => {
  const [values, handleChange, setInitialValues] = useForm({
    name: '',
    type: '',
    createdAt: ''
  });

  useEffect(() => {
    if (!detail && isEditing && !error) getDragonDetail(resourceId);
    if (detail && !values.histories) setInitialValues(detail);
  }, [
    detail,
    setInitialValues,
    getDragonDetail,
    isEditing,
    resourceId,
    values.histories,
    error
  ]);

  useEffect(() => {
    return () => getDragonDetailSuccess(null);
  }, [getDragonDetailSuccess]);

  const handleSubmit = () => {
    if (isEditing) {
      updateDragon({ data: { ...values }, id: resourceId });
    } else {
      createDragon({ ...values, createdAt: now() });
    }

    return props.history.goBack();
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteDragon(resourceId);
    return props.history.goBack();
  };

  const handleBack = e => {
    e.preventDefault();
    return props.history.goBack();
  };

  if (loading && !detail) return <Loader />;
  if (error) return <p>Não foi possível encontrar o dragão.</p>;
  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
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
            {isEditing && (
              <InputField
                name="createdAt"
                disabled
                label="Criado em"
                value={toDate(values.createdAt)}
                onChange={handleChange}
              />
            )}
          </>
        }
        submit={
          <>
            <Button primary label="Salvar" loading={loading} />
            {isEditing && (
              <Button danger label="Excluir" onClick={handleDelete} />
            )}
            <Button secundary label="Voltar" onClick={handleBack} />
          </>
        }
      />
    </Container>
  );
};

export default compose(
  withDragons,
  withRouter
)(DragonDetail);

DragonDetail.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  resourceId: PropTypes.string.isRequired,
  detail: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  getDragonDetail: PropTypes.func,
  getDragonDetailSuccess: PropTypes.func,
  createDragon: PropTypes.func,
  updateDragon: PropTypes.func,
  deleteDragon: PropTypes.func
};
