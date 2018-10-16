import React from "react";
import PropTypes from "prop-types";
import { Icon, Popover } from "antd";

import * as styles from "./style.scss";

const Marker = props => (
  <div lat={props.lat} lng={props.lng}>
    <Popover placement="top" title="Hiii" content="Content">
      <Icon className={styles.container} type="warning" theme="filled" />
    </Popover>
  </div>
);

Marker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default Marker;
