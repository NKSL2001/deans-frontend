import React from "react";
import GMap from "@components/common/GMap";
import NavBar from "@components/common/NavBar";
import Footer from "@components/common/Footer";

import * as styles from "./style.scss";

function PageHome() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>Home</div>
        <div className={styles.map}>
          <GMap />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default PageHome;
