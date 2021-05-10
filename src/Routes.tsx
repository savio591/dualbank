import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Balance } from "./pages/Balance";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Balance}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
