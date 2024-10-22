import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "/images/map.svg",
  iconRetinaUrl: "/images/map.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
  const position: [number, number] = [-1.9441, 30.0619];

  return (
    <div className='w-full h-96  overflow-hidden'>
      <MapContainer
        center={position}
        zoom={15}
        className='w-full h-full'
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />
        <Marker position={position} icon={icon}>
          <Popup className='text-gray-900'>
            <div className='font-medium'>Bi.SFay Studio</div>
            <div className='text-sm'>KN 3 Rd, Kigali, Rwanda</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
