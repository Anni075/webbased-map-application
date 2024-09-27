"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import MapClickHandler from "./MapClickHandler";

export default function Map() {
  console.log("hello world");

  const [marker, setMarker] = useState([]);

  return (
    <MapContainer
      center={[51.0, 9.0]}
      zoom={13}
      scrollWheelZoom={true}
      className="map-container"
    >
      <MapClickHandler
        clickHandler={(latlng) => {
          setMarker(marker.concat([latlng]));
        }}
      />
      <TileLayer
        attribution='&copy; <a href:"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker.map((m, index) => (
        <Marker position={m} key={index}>
          <Popup>
            <p>Latitude: {m.lat}</p>
            <p>Longitude: {m.lng}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
