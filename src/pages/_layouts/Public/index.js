import React from 'react';
import './styles'
import { Container, Content } from './styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Public = ({children}) =>  {
    return (
        <Container>
          <Content>
            <Grid container spacing = {2}>
            <Grid item xs = {12} md = {12}>
            {children}
              </Grid>
            </Grid>
          </Content>
        </Container>
      );
    };

Public.propTypes = {
    children: PropTypes.element.isRequired,
};
      
export default Public;