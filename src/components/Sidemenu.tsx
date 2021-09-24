import React, { useState } from 'react';
import {
  AppBar,
  createStyles,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Switch,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Favorite from '@material-ui/icons/Favorite';
import StarRate from '@material-ui/icons/StarRate';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';

import { BrowserRouter as Router, Route, Switch as BrowserSwitch } from 'react-router-dom';
import Beers from '../screens/beers/Beers';
import BeerDetails from '../screens/beers/components/beer-details/BeerDetails';
import DisplayTypeSwitch from './DisplayTypeSwitch';

const drawerWidth = 240;
const toolbarHeight = '4rem';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      height: toolbarHeight,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      paddingLeft: '1rem',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginTop: toolbarHeight,
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  })
);

// TODO - I shall be renamed to ShellComponent | Dashboard | Root or any other better name
const Sidemenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? 'dark' : 'light';

  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

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

          <List>
            <ListItem button key='My favourites'>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary='My favourites' />
            </ListItem>
            <ListItem button key='My rated beers'>
              <ListItemIcon>
                <StarRate />
              </ListItemIcon>
              <ListItemText primary='My rated beers' />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default Sidemenu;
