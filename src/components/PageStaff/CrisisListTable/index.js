import React from "react";
import { connect } from "react-redux";
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

// const dataSource = [
//   {
//     key: "1",
//     crisisType: "Fire",
//     location: "Jurong West",
//     status: "Pending dispatch"
//   },
//   {
//     key: "2",
//     crisisType: "Injury",
//     location: "Marina Bay Sand",
//     status: "Dispatched"
//   },
//   {
//     key: "3",
//     crisisType: "Injury",
//     location: "One North",
//     status: "Resolved"
//   }
// ];

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
    key: "action"
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status"
  }
];

const createDataSource = (crisisList, crisisType, editCrisis, dispatchCrisis) =>
  crisisList.map(crisis => {
    const key = crisis.crisis_id;
    const type = crisis.crisis_type
      .map(val => crisisType && crisisType[val])
      .join(", ");
    const location = "TODO";
    const status = crisis.crisis_status;
    return {
      key: key,
      crisisType: type,
      location: location,
      status: status,
      action: (
        <div className={styles.actions}>
          <Button type="dashed" onClick={editCrisis}>
            Edit
          </Button>
          <Button onClick={dispatchCrisis}>Dispatch</Button>
          <Button onClick={resolveCrisis} type="danger">
            Resolve
          </Button>
        </div>
      ),
      detail: crisis
    };
  });

const CrisisListTable = props => {
  const { crises, crisisType } = props;
  const { editCrisis, dispatchCrisis } = props;
  return (
    <Table
      dataSource={createDataSource(
        crises,
        crisisType,
        editCrisis,
        dispatchCrisis
      )}
      columns={COLUMNS}
    />
  );
};

CrisisListTable.propTypes = {
  crises: PropTypes.array.isRequired,
  editCrisis: PropTypes.func.isRequired,
  dispatchCrisis: PropTypes.func.isRequired,
  // from redux
  crisisType: PropTypes.func.isRequired,
  assistanceType: PropTypes.func.isRequired
};

export default connect(state => {
  const { system } = state;
  return {
    crisisType: system && system.crisisType,
    assistanceType: system && system.assistanceType
  };
})(CrisisListTable);
