import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`;

export const UserAvatar = styled.div`
  img {
    width: 50px;
    border-radius: 50%;
  }
`;

export const UserActions = styled.div`
  margin-right: 10px;

  a,
  p {
    color: ${({ theme }) => theme.white};
  }

  p {
    font-size: 14px;
  }

  a {
    font-size: 11px;
    text-decoration: underline;
  }
`;
