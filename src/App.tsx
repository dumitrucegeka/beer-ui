import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import BeerList from './screens/beer-list/BeerList';
import BeerDetails from './screens/beer-list/components/beer-details/BeerDetails';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={BeerList} />
      <Route exact path="/beers" component={BeerList} />
      <Route exact path="/beers/:id" component={BeerDetails} />
    </Switch>
  </Router>
);

export default App;
