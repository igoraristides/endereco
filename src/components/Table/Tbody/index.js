import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const TBody = ({ children }) => {
  return <Container>{children}</Container>;
};

TBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default TBody;
