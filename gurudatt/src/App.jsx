import React from 'react'
import './css/app.css'
import bg2 from './assets/bg2.jpg'
import GE2 from './assets/GE2.png'

function App() {
  return (
    <div className="h-screen w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10 h-full flex flex-col">
        <div className="p-4">
          <img
            src={GE2}
            alt="Gurudatt Electrical Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        </div>


      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">
          Gurudatt Electrical
        </h1>
      </div>
    </div>
  )
}

export default App
