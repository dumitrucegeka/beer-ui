import './App.css'
import BeerList from './screens/beer-list/BeerList'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'
import BeerDetails from './screens/beer-list/components/beer-details/BeerDetails'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* TODO - THIS SHOULD BE A LANDING PAGE */}
        </Route>

        <Route exact path="/beers" component={BeerList}></Route>
        <Route path="/beers/:id" component={BeerDetails}></Route>
      </Switch>
    </Router>
  )
}

export default App
