import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const containerStyle = {
  width: '100%',
  height: '400px',
  
  
};

const defaultPosition = { lat: 27.174961, lng: 78.042076 }; // Taj Mahal

// Helper component to update map center
function RecenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
  return null;
}

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(defaultPosition);

  useEffect(() => {
    if (!navigator.geolocation) return;

    // Function to update position
    const updatePosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    };

    // Initial position
    updatePosition();

    // Update every 10 seconds
    const intervalId = setInterval(updatePosition, 10000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    
      <MapContainer center={currentPosition} zoom={15} style={containerStyle} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={currentPosition}>
        <Popup>
          You are here!
        </Popup>
      </Marker>
      <RecenterMap position={currentPosition} />
    </MapContainer>
    
  );
};

export default LiveTracking;