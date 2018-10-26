import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCrises, initSystem } from "@redux/actions";
import GMap from "@components/common/GMap";
import NavBar from "@components/common/NavBar";
import Footer from "@components/common/Footer";
import ActiveCrisisListTable from "@components/PageHome/ActiveCrisisListTable";

import * as styles from "./style.scss";

class PageHome extends React.Component {
  componentDidMount() {
    this.props.initSystem();
    this.fetchData();
  }

  fetchData = () => {
    this.props.getCrises();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.header}>Home</div>
          <div className={styles.map}>
            <GMap crises={this.props.crises || []} />
          </div>
          <div className={styles.activeCrisisListTableContainer}>
            <div className={styles.subHeader}>Active Crisis</div>
            <div className={styles.activeCrisisListTable}>
              <ActiveCrisisListTable crises={this.props.crises || []} />
            </div>·
          </div>
        </div>·
        <Footer />
      </React.Fragment>
    );
  }
}

PageHome.propTypes = {
  crises: PropTypes.array,
  initSystem: PropTypes.func.isRequired,
  getCrises: PropTypes.func.isRequired
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
  getCrises: () => dispatch(getCrises())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHome);
