import React, { Component } from "react";
import Marker from "@components/common/Marker";
// import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

// TODO: get it from redux
const crisisList = [
  {
    lat: 1.3564,
    lng: 103.8977
  },
  {
    lat: 1.3554,
    lng: 103.7677
  },
  {
    lat: 1.3454,
    lng: 103.9677
  }
];

const createMarker = crisisList =>
  crisisList.map((crisis, index) => (
    <Marker key={index} lat={crisis.lat} lng={crisis.lng} />
  ));

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
          defaultZoom={11.85}
          draggable={false}
          disableDoubleClickZoom={true}
          suppressMarkers={true}
        >
          {createMarker(crisisList)}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;
