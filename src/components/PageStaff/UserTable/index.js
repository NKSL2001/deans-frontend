import React from "react";
// import PropTypes from "prop-types";
import { Modal, Button, Table } from "antd";
import * as styles from "./style.scss";

const deleteUser = () => {
  Modal.confirm({
    title: "Delete user?",
    content: "This action is invertible",
    onOk() {
      console.log("Confirmed");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
};

const dataSource = [
  {
    key: "1",
    username: "admin",
    adminStatus: "Yes"
  },
  {
    key: "2",
    username: "callcenteroperator",
    adminStatus: "No"
  }
];

const UserTable = () => {
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
      key: "action",
      render: () => (
        <div className={styles.actions}>
          <Button>Edit</Button>
          <Button onClick={deleteUser} type="danger">
            Delete
          </Button>
        </div>
      )
    }
  ];
  return <Table dataSource={dataSource} columns={COLUMNS} />;
};

// UserTable.propTypes = {
//   editCrisis: PropTypes.func.isRequired,
//   dispatchCrisis: PropTypes.func.isRequired
// };

export default UserTable;
