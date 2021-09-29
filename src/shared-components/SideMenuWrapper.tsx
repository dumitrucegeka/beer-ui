import React, { useState } from 'react';
import { AppBar, Divider, Drawer, IconButton, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';

import { BrowserRouter as Router, Route, Switch as BrowserSwitch } from 'react-router-dom';
import Beers from '../screens/beers/Beers';
import BeerDetails from '../screens/beers/components/beer-details/BeerDetails';
import DisplayTypeSwitch from './DisplayTypeSwitch';
import ListFilterComponent from './ListFilterComponent';
import ThemeService from '../services/ThemeService';
import ThemeSwitch from './ThemeSwitch';

const useStyles = ThemeService.createThemeStyles();

const SideMenuWrapper = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant='h6' noWrap align='center' className={classes.title}>
            Explore the finest beers!
          </Typography>

          <IconButton color='inherit' aria-label='open drawer' edge='end' onClick={handleDrawerOpen} className={clsx(open && classes.hide)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Router basename={process.env.PUBLIC_URL}>
          <BrowserSwitch>
            <Route exact path='/' component={Beers} />
            <Route exact path='/beers' component={Beers} />
            <Route exact path='/beers/:id' component={BeerDetails} />
          </BrowserSwitch>
        </Router>
      </main>

      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>

          <Typography variant='h6' align='center'>
            Settings
          </Typography>
        </div>
        <Divider />

        <DisplayTypeSwitch />
        <Divider />

        <ThemeSwitch />
        <Divider />

        <ListFilterComponent />
      </Drawer>
    </>
  );
};

export default SideMenuWrapper;
