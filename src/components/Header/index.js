import React from 'react';
import { GridContainer } from '../Grid';
import { Container } from './styles';
import UserInfo from './partials/UserInfo';
import { withUser } from '../../containers';
import Logo from '../Logo';

const Header = ({ isLogged, user }) => {
  return (
    <GridContainer>
      <Container isLogged>
        <Logo />
        {isLogged && <UserInfo user={user} />}
      </Container>
    </GridContainer>
  );
};

export default withUser(Header);
