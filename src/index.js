import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import * as ROUTES from "src/routes";
import PageHome from "src/PageHome";
import PageReport from "src/PageReport";
import PageLogin from "src/PageLogin";
import PageStaff from "src/PageStaff";

import "src/styles/app.scss";
import "antd/dist/antd.css";
// import "src/styles/normalize.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: "#ffffff",
      main: "#000000"
      // dark: "#000000",
      // contrastText: "#000000"
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />
        <Route exact path={ROUTES.ROUTE_REPORT} component={PageReport} />
        <Route exact path={ROUTES.ROUTE_LOGIN} component={PageLogin} />
        <Route exact path={ROUTES.STAFF} component={PageStaff} />

        {/* add a 404 page */}
        <Route path={"/"} component={PageHome} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
