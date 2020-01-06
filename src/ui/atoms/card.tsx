import { css } from 'styled-components';

export const card = css`
  width: 100%;
  display: block;
  padding: 20px;
  border-radius: 15px;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.027), 0 0 0 0 rgba(0, 0, 0, 0.039),
    0 0 0 0 rgba(0, 0, 0, 0.047), 0 0 0 0 rgba(0, 0, 0, 0.055),
    0 0 0 0 rgba(0, 0, 0, 0.063), 0 0 0 0 rgba(0, 0, 0, 0.073),
    0 0 0 0 rgba(0, 0, 0, 0.087), 0 0 0 0 rgba(0, 0, 0, 0.11);

  background-color: ${({ theme }) => theme.colors.dark};

  :hover {
    box-shadow: 0 2px 4px -16px rgba(0, 0, 0, 0.027),
      0 4.5px 9.1px -16px rgba(0, 0, 0, 0.039),
      0 7.9px 15.8px -16px rgba(0, 0, 0, 0.047),
      0 12.5px 25.2px -16px rgba(0, 0, 0, 0.055),
      0 19.3px 38.8px -16px rgba(0, 0, 0, 0.063),
      0 30.1px 60.6px -16px rgba(0, 0, 0, 0.073),
      0 50px 100.6px -16px rgba(0, 0, 0, 0.087),
      0 100px 201px -16px rgba(0, 0, 0, 0.11);
  }
`;
