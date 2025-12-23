//import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>
  )
}
export default App