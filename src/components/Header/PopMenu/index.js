import React from 'react';

import { ListItemText, Menu, Paper, Popper } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Creators as AuthActions } from '~/store/ducks/auth';

import useStyles, { Container, Info, Name } from './styles';
import Avatar from '~/components/Avatar';
import useMenu from '~/hooks/useMenu';

function PopMenu() {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.auth);

  const { openMenu, isOpen, closeMenu, anchorEl, menuProps } = useMenu();

  const handleClick = (event) => {
    openMenu(event.currentTarget);
  };

  const handleClickLogout = () => {
    dispatch(AuthActions.authSignOut());
  };

  return (
    <>
      <Menu
        open={isOpen}
        anchorEl={anchorEl}
        onClose={closeMenu}
        {...menuProps}
      >
        <List className={classes.container}>
          <ListItem
            onClick={() => {
              admin ? history.push('/admin/profile') : history.push('/perfil');
            }}
            className={classes.itemStyle}
            button
          >
            <ListItemText disableTypography className={classes.itemText}>
              Editar perfil
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={handleClickLogout}
            className={classes.itemStyle}
            button
          >
            <ListItemText disableTypography className={classes.itemText}>
              Sair
            </ListItemText>
          </ListItem>
        </List>
      </Menu>
      <Container onClick={handleClick}>
        <Name>Olá, <b>{user?.name}</b> </Name>
      </Container>
    </>
  );
}

export default PopMenu;
