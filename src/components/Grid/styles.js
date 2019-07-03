import styled from 'styled-components/macro';

export const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: auto;
  padding: 0 20px;

  @media (min--width: 992px) {
    padding: 0;
  }
`;
