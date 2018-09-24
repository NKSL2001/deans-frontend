import React from "react";
// import PropTypes from "prop-types";
// import Button from "@material-ui/core/Button";
import NavBar from "src/components/NavBar";
import Footer from "src/components/Footer";

import * as styles from "./style.scss";

function PageHome() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>Home</div>
        <div className={styles.map}>
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/view?zoom=10&center=1.3554,103.8677&key=AIzaSyA4Z60Vt8Bq84x2X32NQ286a_2_hADWzqI"
          />
        </div>
        {/* <div className={styles.buttonGroup}>
          <Button variant="contained" color="primary">
            Customize
          </Button>
        </div> */}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default PageHome;
