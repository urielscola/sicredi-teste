import styled from 'styled-components/macro';

export const GridContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: block;
  margin: auto;
  padding: 0 20px;
  padding-bottom: 50px;

  @media (min-width: 992px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
