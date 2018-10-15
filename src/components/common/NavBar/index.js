import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./style.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.item}>
        <Link to="/report">Report</Link>
      </div>
    </div>
  );
}

export default NavBar;
