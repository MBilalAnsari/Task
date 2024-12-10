import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'

export default function App() {
  return (
    <>
      <div className='border-[3px]  bg-[#0F141E] text-white'>
        <Home />
      </div>
    </>
  )
}
