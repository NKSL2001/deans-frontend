import React from "react";
import Map from "@components/common/Map";
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
          <Map center={{ lat: 1.3554, lng: 103.8677 }} zoom={12} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default PageHome;
