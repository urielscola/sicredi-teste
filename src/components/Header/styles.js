import styled, { css } from 'styled-components/macro';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  margin-bottom: 15px;

  ${({ isLogged }) =>
    isLogged &&
    css`
      justify-content: space-between;
    `};

  @media (min-width: 992px) {
    padding: 45px 0;
  }
`;
