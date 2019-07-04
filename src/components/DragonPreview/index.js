import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag';
import { Container, DragonFigure, DragonName } from './styles';
import dragImage from '../../assets/images/dragon_1.png';

const DragonPreview = ({ id, name, type, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Link to={`/dragon/${id}`}>
        <DragonFigure>
          <img src={dragImage} alt={name} />
        </DragonFigure>
        <DragonName>{name}</DragonName>
        <Tag label="Tipo:" value={type} />
      </Link>
    </Container>
  );
};

export default DragonPreview;
