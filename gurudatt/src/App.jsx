import React from 'react'
import './css/app.css'
import bg5 from './assets/bg5.jpg'

function App() {
  return (
    <div className="h-screen w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[2px]" 
        style={{ backgroundImage: `url(${bg5})` }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-white text-4xl font-bold">Gurudatt Electrical</h1>
      </div>
    </div>
  )
}

export default App
