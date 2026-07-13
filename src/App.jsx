import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDonor from './components/AddDonor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      
      <Routes>

<Route path='/' element={<HomePage/>}/>
<Route path='/add' element={<AddDonor/>}/>

      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
