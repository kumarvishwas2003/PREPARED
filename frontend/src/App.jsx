import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="bg-blue-500 w-1/4 h-full p-4">
          <h2 className="text-white text-center">Left Sidebar</h2>
        </div>

        {/* Right Sidebar */}
        <div className="bg-green-500 w-1/4 h-full p-4">
          <h2 className="text-white text-center">Right Sidebar</h2>
        </div>

        {/* Main Content */}
        <div className="bg-yellow-500 w-1/2 h-full p-4">
          <h2 className="text-black text-center">Main Content</h2>
        </div>
      </div>

      {/* Popup Element */}
      <div className="w-11 h-11 bg-red-600 fixed bottom-4 right-4 rounded-full shadow-lg">
        <p className="text-white text-center mt-14">   </p>
      </div>
    </>
  );
}

export default App
