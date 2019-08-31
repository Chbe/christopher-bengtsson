import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./assets/scss/material-kit-react.scss?v=1.8.0";
import ProfilePage from './pages/ProfilePage.js';

var hist = createBrowserHistory();
const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
