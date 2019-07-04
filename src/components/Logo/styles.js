import styled from 'styled-components/macro';
import { boxShadow } from '../../assets/styles/mixins';

export const Container = styled.div`
  padding: 15px;
  width: 100px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  ${boxShadow};

  img {
    border-radius: 50%;
    width: 100%;
  }
`;
