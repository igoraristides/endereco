import styled, { css } from "styled-components";

import fadeIn from "../../../styles/animations/fadeIn";

export const Container = styled.div`
  ${fadeIn};

  width: 100%;

  ${({ fullWidth }) => {
    if (fullWidth)
      return css`
        max-width: none;
      `;

    return css`
      max-width: 300px;
    `;
  }}

  .react-select__value-container {
    padding: 8px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;

  ${({ color }) => {
    return css`
      color: ${color};
    `;
  }}
`;

export const Error = styled.span`
  color: #ff3b2f;
  font-size: 12px;
`;
