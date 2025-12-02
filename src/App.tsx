import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='shadow shadow-lg shadow-indigi-500 bg-gray-700 text-white rounded-lg p-8'>
        <h1 className='font-bold text-4xl uppercase'>Hello World</h1>
      </div>
    </>
  )
}

export default App
