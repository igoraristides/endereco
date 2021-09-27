import styled from "styled-components";

import devices, { max } from "../../../styles/configs/devices";

export const Container = styled.tbody`
  background: ${({ theme }) => theme.colors.background};

  @media ${max.sm} {
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    position: relative;
    overflow: hidden;

    div {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      border-radius: 0;
    }

    svg {
      margin-right: 0.8rem;
    }
    span {
      margin-right: 1rem;
    }
  }
`;
