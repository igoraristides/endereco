import styled from "styled-components";

import devices, { max } from "../../styles/configs/devices";
import "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  @media ${max.sm} {
    position: absolute;
    flex-direction: column;
    top: 0;
    right: 0;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;

  height: 28px;
  width: 28px;
  border-radius: 50%;

  svg {
    pointer-events: none;

    font-size: 20px;
  }
`;

export const DeleteButton = styled(ActionButton)`
  background-color: ${({ theme }) => theme.colors.title};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const EditButton = styled(ActionButton)`
  background-color: ${({ theme }) => theme.colors.blue};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ViewButton = styled(ActionButton)`
  background-color: ${({ theme }) => theme.colors.primary};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const DuplicateButton = styled(ActionButton)`
  background-color: transparent;

  svg {
    color: ${({ theme }) => theme.colors.success};
    height: 28px;
    width: 28px;
  }
`;
