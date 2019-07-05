import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tag from '../Tag';
import { Container, DragonFigure, DragonName } from './styles';
import dragImage from '../../assets/images/dragon_1.png';
import { truncate } from '../../helpers/strings';

const DragonPreview = ({ id, name, type, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Link to={`/dragon/${id}`}>
        <DragonFigure>
          <img src={dragImage} alt={name} />
        </DragonFigure>
        <DragonName>{truncate(name)}</DragonName>
        <Tag label="Tipo:" value={type} />
      </Link>
    </Container>
  );
};

export default DragonPreview;

DragonPreview.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
