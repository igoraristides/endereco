import styled from "styled-components";

import devices, { max } from "../../styles/configs/devices";

export const Container = styled.table`
  border-collapse: collapse;
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 10px;

  background: ${({ theme }) => theme.colors.white};
  padding: 0.875rem 1.5rem;
  border-radius: 7px;
  margin-top: 1.5rem;

  @media ${max.sm} {
    table-layout: fixed;
    margin: 1rem 0;
    border: 0;

    svg,
    span {
      margin-top: 5rem;
    }
  }
`;
