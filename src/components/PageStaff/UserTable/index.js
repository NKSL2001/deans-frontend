import React from "react";
import PropTypes from "prop-types";
import { Button, Table, Switch } from "antd";
import * as styles from "./style.scss";

const COLUMNS = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "Is Admin",
    dataIndex: "adminStatus",
    key: "adminStatus"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action"
  }
];

const createDataSource = (arr, editUser, toggleAdmin) => {
  return arr.map(val => ({
    key: val.id,
    username: val.username,
    adminStatus: (
      <Switch
        defaultChecked={val.is_staff}
        onChange={checked => toggleAdmin(val.id, checked)}
      />
    ),
    action: (
      <div className={styles.actions}>
        <Button type="dashed" onClick={editUser}>
          Change Password
        </Button>
      </div>
    )
  }));
};

const UserTable = props => {
  const { editUser } = props;
  const toggleAdmin = (id, isAdmin) => {
    const form = new FormData();
    form.append("is_staff", isAdmin);
    editUser(id, form);
  };
  return (
    <Table
      dataSource={createDataSource(props.userList, editUser, toggleAdmin)}
      columns={COLUMNS}
    />
  );
};

UserTable.propTypes = {
  userList: PropTypes.array.isRequired,
  editUser: PropTypes.func.isRequired
};

export default UserTable;
