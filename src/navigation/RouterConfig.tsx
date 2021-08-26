import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "./Auth/Login";

import { DASHBOARD, ROOT } from "./Constants";
import NotFound from "./NotFound";

export const RouterConfig: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
