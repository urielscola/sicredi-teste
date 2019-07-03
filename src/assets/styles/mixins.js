import { css } from 'styled-components/macro';

export const boxShadow = css`
  box-shadow: 0px 0px 10px #482c56;
  transition: 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 30px #482c56;
  }
`;
