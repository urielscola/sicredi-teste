import React from 'react';
import { GridContainer } from '../Grid';
import { Container } from './styles';
import UserInfo from './partials/UserInfo';
import { withUser } from '../../containers';
import Logo from '../Logo';

const Header = ({ isLogged, user, logout }) => {
  return (
    <GridContainer>
      <Container isLogged={isLogged}>
        <Logo />
        {isLogged && <UserInfo user={user} logout={logout} />}
      </Container>
    </GridContainer>
  );
};

export default withUser(Header);
