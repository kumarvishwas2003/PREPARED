import { useState } from 'react'

import Messages from "./components/Messages"
import './App.css'
import Description from './components/Description';
import Maps from './components/Maps';

function App() {

  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <div className="h-12 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-blue-400 text-xl font-bold">PEREPARED</h1>
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
              <div className="absolute inset-0 bg-slate-800">
              <Maps/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
