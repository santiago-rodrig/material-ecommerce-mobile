import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Black from './Black'
import Purple from './Purple'
import EditAddress from "./EditAddress"
import Blue from './Blue'

const App = () => (
  <Router>
    <Switch>
      <Route path="/blue">
        <Blue />
      </Route>
      <Route path="/purple">
        <Purple />
      </Route>
      <Route path="/edit_address">
        <EditAddress />
      </Route>
      <Route path="/">
        <Black />
      </Route>
    </Switch>
  </Router>
)

export default App;
