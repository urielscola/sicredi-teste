import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: strech;
  color: ${({ theme }) => theme.white};
  font-size: 10px;
`;

export const Label = styled.div`
  padding: 7px;
  background-color: ${({ theme }) => theme.fontPrimary};
  border-radius: 3px 0px 0px 3px;
`;

export const Value = styled.div`
  padding: 7px;
  background-color: ${({ theme }) => theme.purple};
  border-radius: 0px 3px 3px 0px;
`;
