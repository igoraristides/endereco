import styled from "styled-components";

import devices, { max } from "../../../styles/configs/devices";

export const Container = styled.td`
  color: ${({ theme }) => theme.colors.text};

  text-align: flex-start;

  padding: 1rem;
  align-items: center;
  font-size: 13px;
  font-weight: 300;
  &:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  &:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  @media ${max.sm} {
    display: block;

    &:before {
      content: attr(data-label);
      float: left;

      font-weight: 800;

      margin-right: 10px;
      vertical-align: middle;
    }
  }
`;
