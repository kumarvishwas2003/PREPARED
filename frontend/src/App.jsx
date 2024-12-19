import { useState } from 'react'

import Messages from "./components/Messages"
import './App.css'
import Description from './components/Description';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <div className="h-12 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-blue-400 text-xl font-bold">RapidSOS</h1>
            <span className="text-slate-400 text-sm">Tools</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Map Layer</span>
            <div className="flex space-x-2">
              <button className="p-1 text-slate-400 hover:bg-slate-800 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
              <button className="p-1 text-slate-400 hover:bg-slate-800 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex bg-slate-900">
          {/* Left Sidebar - Messages */}
          <div className="w-1/4 border-r border-slate-700 flex flex-col">
            
            <div className="flex-1 overflow-auto">
              <Messages />
            </div>
          </div>

          {/* Middle Section - Description */}
          <div className="w-1/4 border-r border-slate-700">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Description</span>
                </div>
              </div>
              <div className="flex-1 overflow-auto">
                <Description />
              </div>
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="flex-1 bg-slate-800">
            <div className="h-full relative">
              {/* Map placeholder - in real app, you'd integrate a mapping library here */}
              <div className="absolute inset-0 bg-slate-800">
                {/* Map controls */}
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
