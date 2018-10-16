import React from "react";
// import { Icon } from "antd";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";

import * as styles from "./style.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.item}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.item + " " + styles.brand}>
          Dean&#39;s Crisis Management System
        </div>
        <div className={styles.item}>
          <Link to="/">
            {/* <Icon type="home" theme="outlined" /> */}
            Home
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
