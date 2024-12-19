import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Maps = () => {
  // Move useState hooks inside the component
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create default icon for the marker
  const defaultIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Sample JSON data
  const sampleData = [
    {
      latitude: 51.505,
      longitude: -0.09,
      description:
        "Historic Tower of London - A magnificent fortress in the heart of London",
      steps: [
        "Enter through the West Gate",
        "Visit the Crown Jewels first",
        "Take the Yeoman Warder tour",
        "Explore the White Tower",
      ],
    },
  ];

  useEffect(() => {
    try {
      setLocations(sampleData);
      setLoading(false);
    } catch (err) {
      setError("Failed to load location data");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-blue-600">Loading location data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-96">
      <MapContainer center={[51.505, -0.09]} zoom={4} className="h-screen w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
            icon={defaultIcon}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
