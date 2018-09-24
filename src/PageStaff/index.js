import React from "react";
import NavBar from "src/components/NavBar";
import VerticalMenu from "./components/VerticalMenu";
import CrisisList from "./components/CrisisList";
import Footer from "src/components/Footer";

import * as styles from "./style.scss";

function PageStaff() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.left}>
          <VerticalMenu />
        </div>
        <div className={styles.right}>
          <div className={styles.header}>Dashboard</div>
          <div className={styles.map}>
            <iframe
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/view?zoom=10&center=1.3554,103.8677&key=AIzaSyA4Z60Vt8Bq84x2X32NQ286a_2_hADWzqI"
            />
          </div>
          <div className={styles.table}>
            <CrisisList />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default PageStaff;
