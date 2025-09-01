import React from 'react'
import './css/app.css'
import bg2 from './assets/bg2.jpg'
import GE2 from './assets/GE2.png'

function App() {
  return (
    <div className="h-screen w-full relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="p-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
            <img
              src={GE2}
              alt="Gurudatt Electrical Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover"
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
