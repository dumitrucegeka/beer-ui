import React, { useState } from 'react';
import { AppBar, Divider, Drawer, FormControlLabel, IconButton, Switch, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { ThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, Switch as BrowserSwitch } from 'react-router-dom';
import Beers from '../screens/beers/Beers';
import BeerDetails from '../screens/beers/components/beer-details/BeerDetails';
import DisplayTypeSwitch from './DisplayTypeSwitch';
import ListFilterComponent from './ListFilterComponent';
import ThemeService from '../services/ThemeService';

const useStyles = ThemeService.createThemeStyles();

// TODO - I shall be renamed to ShellComponent | Dashboard | Root or any other better name
const Sidemenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [darkState, setDarkState] = useState(false);
  const darkTheme = ThemeService.createDarkTheme(darkState);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />

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

          <FormControlLabel
            control={<Switch checked={darkState} onChange={handleThemeChange} color='primary' inputProps={{ 'aria-label': 'checkbox with default color' }} />}
            label='Dark Mode'
          />

          <Divider />
          <ListFilterComponent />
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default Sidemenu;
