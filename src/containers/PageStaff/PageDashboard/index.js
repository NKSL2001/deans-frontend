import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "antd";
import GMap from "@components/common/GMap";
import CrisisListTable from "@components/PageStaff/CrisisListTable";
import { showModal } from "@redux/actions";
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
            <Button
              type="primary"
              onClick={() => this.props.showModal("CREATE_NEW_CRISIS")}
            >
              Create new crisis
            </Button>
          </div>
        </div>
        <div className={styles.crisisListTable}>
          <CrisisListTable
            editCrisis={(event, modalProps) =>
              this.props.showModal("EDIT_CRISIS", modalProps)
            }
            dispatchCrisis={(event, modalProps) =>
              this.props.showModal("DISPATCH_CRISIS", modalProps)
            }
          />
        </div>
      </div>
    );
  }
}

PageDashboard.propTypes = {
  showModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps))
});

export default connect(
  null,
  mapDispatchToProps
)(PageDashboard);
