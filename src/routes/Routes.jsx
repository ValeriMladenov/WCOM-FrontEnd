import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Orders from "views/pages/Orders";

import Login from "views/pages/auth/Login";
import PrivateAdminRoute from "./PrivateAdminRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <PrivateAdminRoute exact path="/orders" component={Orders} />
        <Redirect from="*" to="/orders" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
