import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Table } from "antd";
import * as styles from "./style.scss";

const resolveCrisis = () => {
  Modal.confirm({
    title: "Resolve crisis?",
    content:
      "The crisis will be marked as resolved. You won't be able to open it again.",
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
    crisisType: "Fire",
    location: "Jurong West",
    status: "Pending dispatch"
  },
  {
    key: "2",
    crisisType: "Injury",
    location: "Marina Bay Sand",
    status: "Dispatched"
  },
  {
    key: "3",
    crisisType: "Injury",
    location: "One North",
    status: "Resolved"
  }
];

const CrisisListTable = props => {
  const COLUMNS = [
    {
      title: "Crisis Type",
      dataIndex: "crisisType",
      key: "crisisType"
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div className={styles.actions}>
          <Button type="dashed" onClick={props.editCrisis}>
            Edit
          </Button>
          <Button onClick={props.dispatchCrisis}>Dispatch</Button>
          <Button onClick={resolveCrisis} type="danger">
            Resolve
          </Button>
        </div>
      )
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status"
    }
  ];
  return <Table dataSource={dataSource} columns={COLUMNS} />;
};

CrisisListTable.propTypes = {
  editCrisis: PropTypes.func.isRequired,
  dispatchCrisis: PropTypes.func.isRequired
};

export default CrisisListTable;
