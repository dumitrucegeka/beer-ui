import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BeerDetails from './screens/beers/components/beer-details/BeerDetails';
import Beers from './screens/beers/Beers';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Beers} />
      <Route exact path='/beers' component={Beers} />
      <Route exact path='/beers/:id' component={BeerDetails} />
    </Switch>
  </Router>
);

export default App;
