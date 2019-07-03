import React from 'react';
import { GridContainer } from '../Grid';
import { Container } from './styles';

import Logo from '../Logo';

const Header = () => {
  return (
    <GridContainer>
      <Container>
        <Logo />
      </Container>
    </GridContainer>
  );
};

export default Header;
