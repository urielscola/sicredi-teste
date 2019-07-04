import React from 'react';
import { Link } from 'react-router-dom';
import { Container, UserAvatar, UserActions } from './styles';

const UserInfo = ({ user }) => {
  return (
    <Container>
      <UserActions>
        <p>Olá, {user.username}!</p>
        <Link to="/logout">sair</Link>
      </UserActions>
      <UserAvatar>
        <img src="http://placehold.it/50x50" alt={user.username} />
      </UserAvatar>
    </Container>
  );
};

export default UserInfo;
