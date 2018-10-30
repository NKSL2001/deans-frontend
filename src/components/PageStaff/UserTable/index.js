import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Table } from "antd";
import * as styles from "./style.scss";

const COLUMNS = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "Admin Status",
    dataIndex: "adminStatus",
    key: "adminStatus"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  }
];

const createDataSource = arr => {
  return arr.map(val => ({
    key: val.id,
    username: val.username,
    adminStatus: val.is_staff ? "Yes" : "No",
    action: (
      <div className={styles.actions}>
        <Button type="dashed">Edit</Button>
      </div>
    )
  }));
};

const UserTable = props => {
  return (
    <Table dataSource={createDataSource(props.userList)} columns={COLUMNS} />
  );
};

UserTable.propTypes = {
  // editCrisis: PropTypes.func.isRequired,
  // dispatchCrisis: PropTypes.func.isRequired
  userList: PropTypes.array.isRequired
};

export default UserTable;
