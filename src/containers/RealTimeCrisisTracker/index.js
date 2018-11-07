import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { startRealTimeCrisisTracking } from "@redux/actions";

class RealTimeCrisisTracker extends React.Component {
  componentDidMount = () => this.props.startRealTimeCrisisTracking(30000);
  render() {
    return this.props.children;
  }
}

RealTimeCrisisTracker.propTypes = {
  startRealTimeCrisisTracking: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  startRealTimeCrisisTracking: time =>
    dispatch(startRealTimeCrisisTracking(time))
});

export default connect(
  null,
  mapDispatchToProps
)(RealTimeCrisisTracker);
