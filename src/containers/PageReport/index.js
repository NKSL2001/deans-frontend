import React from "react";
import NavBar from "@components/common/NavBar";
import Footer from "@components/common/Footer";
import CrisisReportForm from "@components/PageReport/CrisisReportForm";

import * as styles from "./style.scss";

class PageReport extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.header}>Report Crisis</div>
          <div style={{ marginTop: "2rem" }}>
            If you prefer to report over phone, please call us directly at{" "}
            <strong>12345678</strong>.
          </div>
          <div className={styles.form}>
            <CrisisReportForm />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PageReport;
