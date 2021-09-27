import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Thead = ({ children }) => {
  return <Container>{children}</Container>;
};

Thead.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Thead;
