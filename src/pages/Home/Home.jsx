import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN = `${process.env.REACT_APP_MAP_ACCESS_TOKEN}`;

const Home = () => {
  const [viewport, setViewport] = useState({
    latitude: 41.8781,
    longitude: -87.6298,
    zoom: 8,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );
  return (
    <div style={{ height: "100vh", color: 'whitesmoke', fontSize: '2'}}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width='100%'
        height='100%'
        mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position='top-left'
        />
      </MapGL>
    </div>
  );
};
export default Home;
