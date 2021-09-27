import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  radio: {
    color: '#CEDBF7',
    '&.Mui-checked': {
      color: '#9900CC',
    },
  },
}));

export const LabelOption = styled.div`
  font-weight: normal;
  font-size: 13px;
  align-items: center;
  color: #4d4d4e;
`;
export const Error = styled.span`
  color: #ff3b2f;
  font-size: 12px;
`;
