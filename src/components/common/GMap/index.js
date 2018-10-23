import React, { Component } from "react";
import Marker from "@components/common/Marker";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

// TODO: get it from redux
// const crisisList = [
//   {
//     lat: 1.3564,
//     lng: 103.8977,
//     type: "Fire",
//     description: "Fire in the hole!"
//   },
//   {
//     lat: 1.3554,
//     lng: 103.7677,
//     type: "Injury",
//     description: ""
//   },
//   {
//     lat: 1.3454,
//     lng: 103.9677,
//     type: "Injury",
//     description: ""
//   }
// ];

const createMarker = crisisList =>
  crisisList.map(crisis => {
    const key = crisis.crisis_id;
    const location = crisis.crisis_location
      .split(",  ")
      .map(val => parseFloat(val));
    const type = crisis.crisis_type;
    const description = crisis.crisis_description;
    return (
      <Marker
        key={key}
        lat={location[0]}
        lng={location[1]}
        type={type}
        description={description}
      />
    );
  });

class GMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA4Z60Vt8Bq84x2X32NQ286a_2_hADWzqI"
          }}
          defaultCenter={{ lat: 1.3354, lng: 103.8277 }}
          defaultZoom={12}
          draggable={true}
        >
          {createMarker(this.props.crises)}
        </GoogleMapReact>
      </div>
    );
  }
}

GMap.propTypes = {
  crises: PropTypes.array.isRequired
};

export default GMap;
