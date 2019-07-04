import styled from 'styled-components/macro';
import { boxShadow } from '../../assets/styles/mixins';

export const Container = styled.div`
  width: 48%;
  margin-bottom: 45px;
  margin-right: 4%;
  padding: 20px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 6px;
  ${boxShadow};

  &:nth-of-type(2n) {
    margin-right: 0;
  }

  @media (min-width: 992px) {
    width: 29%;
    margin-right: 6.5%;

    &:nth-of-type(2n) {
      margin-right: 6.5%;
    }

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
`;

export const DragonFigure = styled.div`
  margin-bottom: 25px;

  img {
    width: 100%;
    max-width: 120px;
    display: block;
    margin: auto;
  }
`;

export const DragonName = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.fontPrimary};
`;
