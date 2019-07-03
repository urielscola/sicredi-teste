import styled from 'styled-components/macro';
import { boxShadow } from '../../assets/styles/mixins';

export const Container = styled.form`
  padding: 25px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 6px;
  max-width: 500px;
  flex-grow: 1;
  ${boxShadow};
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 35px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -15px;
    margin: auto;
    width: 70px;
    height: 1px;
    display: block;
    background-color: #bbb;
  }

  h2 {
    color: ${({ theme }) => theme.fontPrimary};
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.fontSecundary};
    font-size: 14px;
  }
`;

export const FormBody = styled.div`
  margin: 25px 0;
`;
