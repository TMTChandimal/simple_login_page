//import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './screen/Register.jsx'
import Dashboard from './screen/Dashboard.jsx'
import Login from './screen/Login.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import './App.css'


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    
      <Route element={<ProtectedRoutes/>}>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
export default App