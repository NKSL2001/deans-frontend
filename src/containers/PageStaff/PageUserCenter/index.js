import React from "react";
import { Button } from "antd";
import UserTable from "@components/PageStaff/UserTable";
import * as styles from "./style.scss";

class PageUserCenter extends React.Component {
  render() {
    return (
      <div>
        <h1>User Center</h1>
        <div className={styles.subHeader}>
          <div className={styles.item}>User List</div>
          <div className={styles.item}>
            <Button type="primary">Add user</Button>
          </div>
        </div>
        <div className={styles.userTable}>
          <UserTable />
        </div>
      </div>
    );
  }
}

export default PageUserCenter;
