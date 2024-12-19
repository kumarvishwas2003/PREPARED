import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <div className="h-[50px] bg-[#0f233b] border-b border-white flex items-center justify-between px-4">
          <h1 className="text-white text-lg font-bold">Navbar</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Left Sidebar */}
          <div className="bg-[#0f233b] w-1/4 p-4 border-r">
            <h2 className="text-white text-center">Left Sidebar</h2>
          </div>

          <div className="bg-[#0f233b] w-1/4 p-4 border-r">
            <h2 className="text-white text-center">Right Sidebar</h2>
          </div>

          {/* Main Section */}
          <div className="bg-[#0f233b] w-1/2 p-4">
            <h2 className="text-black text-center">Main Content</h2>
          </div>

          {/* Right Sidebar */}
        </div>
      </div>
    </>
  );
}

export default App
