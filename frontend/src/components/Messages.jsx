import React, { useState } from "react";
import Helpline from "../components/Helpline";
import Alert from "../components/Alerts";

const Messages = () => {
  const [activeTab, setActiveTab] = useState("helpline");

//   return (
//     <div className="w-full h-full bg-[#0f233b]">
//       {/* Tab Navigation */}
//       <div className="flex border-b bg-[#0f233b]">
//         <button
//           className={`w-1/2 py-2 text-center ${
//             activeTab === "helpline"
//               ? "border-b-4 border-blue-500 font-bold"
//               : ""
//           }`}
//           onClick={() => setActiveTab("helpline")}
//         >
//           Helpline
//         </button>
//         <button
//           className={`w-1/2 py-2 text-center ${
//             activeTab === "alert" ? "border-b-4 border-blue-500 font-bold" : ""
//           }`}
//           onClick={() => setActiveTab("alert")}
//         >
//           Alert
//         </button>
//       </div>

//       {/* Render Active Tab Content */}
//       <div className="p-4">
//         {activeTab === "helpline" && <Helpline />}
//         {activeTab === "alert" && <Alert />}
//       </div>
//     </div>
//   );
    return (
      <>
        <header className="bg-[#0f233b] py-4">
          <div className="text-center text-white text-xl font-bold border-b">
            Helpline
          </div>
        <Helpline />
        </header>

      </>
    );
};

export default Messages;
