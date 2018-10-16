import React from "react";
import * as styles from "./style.scss";

export default () => (
  <div className={styles.container}>
    <div className={styles.left}>Dean &copy; 2018. Made with ❤️.</div>
    <div className={styles.right}>
      Follow us on <a href="#">Facebook</a> to receive latest crisis updates!
    </div>
  </div>
);
