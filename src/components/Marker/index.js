import React from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";
import pin from "@assets/pin.png";

import * as styles from "./style.scss";

const Marker = props => (
  <div lat={props.lat} lng={props.lng} key={props.key}>
    <Popover
      placement="top"
      title={props.type.join(", ")}
      content={props.description === "" ? "No description" : props.description}
    >
      {/* <Icon className={styles.container} type="warning" theme="filled" /> */}
      <img className={styles.container} src={pin} width="35" />
    </Popover>
  </div>
);

Marker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  type: PropTypes.array.isRequired,
  key: PropTypes.number.isRequired,
  description: PropTypes.string
};

export default Marker;
