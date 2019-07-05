import styled, { css } from 'styled-components/macro';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0 0;

  ${({ isLogged }) =>
    isLogged &&
    css`
      justify-content: space-between;
    `};

  @media (min-width: 992px) {
    margin-bottom: 15px;
    padding: 45px 0 25px;
  }
`;
