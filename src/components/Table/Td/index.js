import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Td = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Td.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number, 
  ]).isRequired,
};

export default Td;
