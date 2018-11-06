import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showModal, resolveCrisis, getCrises } from "@redux/actions";
import { Modal, Button, Table, message } from "antd";
import * as styles from "./style.scss";

const statusMap = {
  PD: "Pending",
  DP: "Dispatched",
  RS: "Resolved"
};

// eslint-disable-next-line max-params
const resolve = (id, flag, resolveCrisis, getCrises, undo) => {
  console.log(undo);
  Modal.confirm({
    title: undo ? "Reactivate crisis" : "Resolve crisis?",
    content: `The crisis will be marked as ${undo ? "pending" : "resolved"}.`,
    onOk() {
      resolveCrisis(id, undo)
        .then(() => {
          message.success(
            `Crisis has been ${undo ? "reactivated" : "resolved"}.`,
            2
          );
          getCrises();
        })
        .catch(error => console.log(error));
    },
    onCancel() {
      console.log("Cancel");
    }
  });
};

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

const createDataSource = (
  flag,
  crisisList,
  crisisType,
  dispatchCrisis,
  editCrisis,
  resolveCrisis,
  getCrises
  // eslint-disable-next-line
) =>
  crisisList.map(crisis => {
    const id = crisis.crisis_id;
    const type = crisis.crisis_type
      .map(val => crisisType && crisisType[val])
      .join(", ");
    const location = crisis.crisis_location1.replace(/"/g, "");
    const status = crisis.crisis_status;
    return {
      key: id,
      crisisType: type,
      location: location,
      status: statusMap[status],
      action: (
        <div className={styles.actions}>
          <Button
            disabled={status === "RS"}
            type="dashed"
            onClick={() => editCrisis(crisis)}
          >
            Edit
          </Button>
          <Button
            disabled={status === "RS"}
            onClick={() => dispatchCrisis(crisis)}
          >
            Dispatch
          </Button>
          <Button
            onClick={() =>
              resolve(id, flag, resolveCrisis, getCrises, status === "RS")
            }
            type="danger"
          >
            {status === "RS" ? "Reactivate" : "Resolve"}
          </Button>
        </div>
      ),
      detail: crisis
    };
  });

const CrisisListTable = props => {
  const { crises, crisisType, resolveCrisis, flag, getCrises } = props;
  const dispatchCrisis = crisis => {
    props.showModal("DISPATCH_CRISIS", { crisis });
  };

  const editCrisis = crisis => {
    props.showModal("EDIT_CRISIS", { crisis });
  };
  return (
    <Table
      dataSource={createDataSource(
        flag,
        crises,
        crisisType,
        dispatchCrisis,
        editCrisis,
        resolveCrisis,
        getCrises
      )}
      columns={COLUMNS}
    />
  );
};

CrisisListTable.propTypes = {
  flag: PropTypes.bool.isRequired,
  crises: PropTypes.array.isRequired,
  // from redux
  crisisType: PropTypes.object.isRequired,
  assistanceType: PropTypes.object.isRequired,
  getCrises: PropTypes.func.isRequired,
  resolveCrisis: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default connect(
  state => {
    const { system, staff } = state;
    return {
      flag: staff.flag || false,
      crisisType: system && system.crisisType,
      assistanceType: system && system.assistanceType
    };
  },
  dispatch => ({
    resolveCrisis: (id, undo) => dispatch(resolveCrisis(id, undo)),
    getCrises: () => dispatch(getCrises()),
    showModal: (modalType, modalProps) =>
      dispatch(showModal(modalType, modalProps))
  })
)(CrisisListTable);
