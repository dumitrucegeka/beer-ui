import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import BeerList from './screens/beer-list/BeerList';
import BeerDetails from './screens/beer-list/components/beer-details/BeerDetails';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        {/* TODO - THIS SHOULD BE A LANDING PAGE */}
      </Route>

      <Route exact path="/beers" component={BeerList} />
      <Route path="/beers/:id" component={BeerDetails} />
    </Switch>
  </Router>
);

export default App;
