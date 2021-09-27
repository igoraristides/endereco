import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Tr = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Tr.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Tr;
