import React, { Component } from "react";
// import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const Test = () => (
  <div
    style={{
      width: "20px",
      height: "20px",
      backgroundColor: "red",
      borderRadius: "20px"
    }}
  />
);

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA4Z60Vt8Bq84x2X32NQ286a_2_hADWzqI" }}
          defaultCenter={{ lat: 1.3554, lng: 103.8677 }}
          defaultZoom={12}
        >
          <Test lat={1.3554} lng={103.7677} />
        </GoogleMapReact>
      </div>
    );
  }
}

// GMap.propTypes = {
//   center: PropTypes.object.isRequired,
//   zoom: PropTypes.number.isRequired
// };

export default GMap;
