import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BeerList from './screens/beers/Beers';
import BeerDetails from './screens/beers/components/beer-details/BeerDetails';

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
