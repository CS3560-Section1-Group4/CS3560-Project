import Login from "./containers/Login";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/*<Route exact path="/login">
  <Login />
</Route>*/


export default () => (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
    );