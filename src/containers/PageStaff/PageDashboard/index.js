import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "antd";
import GMap from "@components/common/GMap";
import CrisisListTable from "./CrisisListTable";
import { showModal, initSystem, getCrises } from "@redux/actions";
import * as styles from "./style.scss";

class PageDashboard extends React.Component {
  componentDidMount() {
    this.props.initSystem();
    this.fetchData();
  }

  fetchData = () => {
    this.props.getCrises();
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div className={styles.map}>
          <GMap crises={this.props.crises || []} />
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
          <CrisisListTable crises={this.props.crises || []} />
        </div>
      </div>
    );
  }
}

PageDashboard.propTypes = {
  crises: PropTypes.array.isRequired,
  initSystem: PropTypes.func.isRequired,
  getCrises: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { system, common } = state;
  return {
    crisisType: system && system.crisisType,
    assistanceType: system && system.assistanceType,
    crises: common && common.crises
  };
};

const mapDispatchToProps = dispatch => ({
  initSystem: () => dispatch(initSystem()),
  getCrises: () => dispatch(getCrises()),
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDashboard);
