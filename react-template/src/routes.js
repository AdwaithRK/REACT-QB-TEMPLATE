import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
}
