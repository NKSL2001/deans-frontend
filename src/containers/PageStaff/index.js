import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "src/routes";
import NavBar from "@components/common/NavBar";
import Footer from "@components/common/Footer";
import Menu from "@components/PageStaff/Menu";
import PageDashboard from "./PageDashboard";
import PageUserCenter from "./PageUserCenter";
import PageSetting from "./PageSetting";

import * as styles from "./style.scss";

function PageStaff() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.left}>
          <Menu />
        </div>
        <div className={styles.right}>
          <Switch>
            <Route
              exact
              path={ROUTES.ROUTE_DASHBOARD}
              component={PageDashboard}
            />
            <Route
              exact
              path={ROUTES.ROUTE_USER_CENTER}
              component={PageUserCenter}
            />
            <Route exact path={ROUTES.ROUTE_SETTING} component={PageSetting} />
            {/* fallback */}
            <Route path={ROUTES.ROUTE_STAFF} component={PageDashboard} />
          </Switch>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default PageStaff;
