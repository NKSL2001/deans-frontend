import React from "react";
import PropTypes from "prop-types";
import NavBar from "@components/common/NavBar";
import Footer from "@components/common/Footer";
import CrisisReportForm from "@components/PageReport/CrisisReportForm";
import { connect } from "react-redux";
import { getCrises, initSystem } from "@redux/actions";

import * as styles from "./style.scss";

class PageReport extends React.Component {
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
          <div className={styles.header}>Report Crisis</div>
          <div style={{ marginTop: "2rem" }}>
            If you prefer to report over phone, please call us directly at{" "}
            <strong>12345678</strong>.
          </div>
          <div className={styles.form}>
            <CrisisReportForm
              crisisType={this.props.crisisType || []}
              assistanceType={this.props.assistanceType || []}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

PageReport.propTypes = {
  crisisType: PropTypes.array.isRequired,
  assistanceType: PropTypes.array.isRequired,
  crises: PropTypes.array.isRequired,
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
)(PageReport);
