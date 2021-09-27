import styled, { css } from 'styled-components';

import { theme } from '~/styles/theme';

const drawerWidth = 252;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  padding: 0 25px;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 65px;

  background-color: ${({ theme }) => theme.colors.header};
  ${({ open, themeMat }) =>
    open &&
    css`
      width: calc(100% - ${drawerWidth});
      padding-left: ${drawerWidth}px;
      transition: ${themeMat.transitions.create(['margin', 'width'], {
      easing: themeMat.transitions.easing.easeOut,
      duration: themeMat.transitions.duration.enteringScreen,
    })};
    `}
  z-index: 100;
`;

export const Navigation = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  > a:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const Title = styled.div`
  color: ${theme.colors.label};
  margin-left: 15px;
  font-size: 18px;
`;
export const WalletAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.success};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  .svg-carteira {
    width: auto;
    margin-right: 15px;
  }
`;
