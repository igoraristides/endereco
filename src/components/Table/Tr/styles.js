import styled, { keyframes } from "styled-components";

import fadeIn from "react-animations/lib/fade-in";

import devices, { max } from "../../../styles/configs/devices";

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.tr`
  animation: 1s ${fadeInAnimation};
  position: relative;
  cursor: pointer;

  @media ${max.sm} {
    display: block;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;
