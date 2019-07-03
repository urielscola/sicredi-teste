import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/images/dragon_3.png';

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="DragonList" />
      </Link>
    </Container>
  );
};

export default Logo;
