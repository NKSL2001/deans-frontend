import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "src/routes";
import PageHome from "@containers/PageHome";
import PageReport from "@containers/PageReport";
import PageLogin from "@containers/PageLogin";
import PageStaff from "@containers/PageStaff";

import "src/styles/app.scss";
import "antd/dist/antd.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />
      <Route exact path={ROUTES.ROUTE_REPORT} component={PageReport} />
      <Route exact path={ROUTES.ROUTE_LOGIN} component={PageLogin} />
      <Route path={ROUTES.ROUTE_STAFF} component={PageStaff} />
      {/* add a 404 page */}
      <Route path={"/"} component={PageHome} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
