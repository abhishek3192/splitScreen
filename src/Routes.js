import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from './Component/Dashboard'

export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path='/dashboard' component={Dashboard}/>
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </div>
  );
};
