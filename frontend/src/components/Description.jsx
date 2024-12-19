import React from "react";

const Description = ({
  incident = {
    address: "2401 Homestead Rd.",
    city: "Santa Clara",
    state: "CA",
    zipCode: "95050",
    latitude: "37.368066",
    longitude: "-122.020693",
    incidentTime: "2/3/2024 12:08:55PM",
    description: "Smoke Detector",
    zone: "Kitchen",
    serviceProvider: "Fire Company",
  },
}) => {
  return (
    <div className="h-full bg-[#0F233B] text-white flex flex-col">
      {/* Header Section */}
          <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
              Commercial Fire 01
            </span>
          </div>
          <div className="flex items-center space-x-2">
            
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-auto p-4 space-y-6">
        {/* Location Details */}
        <div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{incident.address}</h2>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
                Assign
              </button>
            </div>
            <p className="text-gray-400 text-sm">{`${incident.city}, ${incident.state} ${incident.zipCode}`}</p>
          </div>
          <div className="text-xs text-gray-400">
            Lat/Long: {incident.latitude}, {incident.longitude}
          </div>
        </div>

        {/* Incident Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">Incident Time</div>
              <div className="text-sm">{incident.incidentTime}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Description</div>
              <div className="text-sm">{incident.description}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">Zone/Sensor</div>
              <div className="text-sm">{incident.zone}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Service Provider</div>
              <div className="text-sm">{incident.serviceProvider}</div>
            </div>
          </div>
        </div>

        {/* Video Feed */}
     

        {/* Chat Section */}
      
      </div>
    </div>
  );
};

export default Description;
