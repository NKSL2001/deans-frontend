import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./style.scss";

export default () => (
  <div className={styles.container}>
    Dean &copy; 2018 | <Link to="login">Staff Login</Link>
  </div>
);
