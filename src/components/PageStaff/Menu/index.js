import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./style.scss";

const Menu = () => (
  <div className={styles.container}>
    <Link to="/staff/dashboard">
      <div className={styles.item}>Dashboard</div>
    </Link>
    <Link to="/staff/user-center">
      <div className={styles.item}>User Center</div>
    </Link>
    <Link to="/staff/setting">
      <div className={styles.item}>Setting</div>
    </Link>
  </div>
);

export default Menu;
