import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

import * as styles from "./style.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.item}>
          <Link to="/">
            <Icon type="home" theme="outlined" />
          </Link>
        </div>
        <div className={styles.item}>
          <Link to="/report">Report</Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
