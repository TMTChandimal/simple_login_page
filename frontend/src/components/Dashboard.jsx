import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button><Link to="/">Logout</Link></button>
    </div>
  )
}

export default Dashboard
