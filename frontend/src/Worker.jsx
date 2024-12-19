import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const defaultIcon = new Icon({
  iconUrl: "/api/placeholder/32/32",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Worker = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample JSON data - replace with your actual data
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
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold">Locations Map</h1>
        </div>

        {/* Map */}
        <div className="h-96">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={4}
            className="h-full w-full"
          >
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

        {/* Locations List */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-6">
            Location Details
          </h2>
          <div className="space-y-8">
            {locations.map((location, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    Location {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Coordinates: {location.latitude}, {location.longitude}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Description:
                  </h4>
                  <p className="text-gray-600">{location.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Steps:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    {location.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-gray-600">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worker;
