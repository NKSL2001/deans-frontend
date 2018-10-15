import React from "react";
import { Button } from "antd";
import GMap from "@components/common/GMap";
import CrisisListTable from "@components/PageStaff/CrisisListTable";
import * as styles from "./style.scss";

class PageDashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div className={styles.map}>
          <GMap />
        </div>
        <div className={styles.subHeader}>
          <div className={styles.item}>Crisis List</div>
          <div className={styles.item}>
            <Button type="primary">Create new crisis</Button>
          </div>
        </div>
        <div className={styles.crisisListTable}>
          <CrisisListTable />
        </div>
      </div>
    );
  }
}

export default PageDashboard;
