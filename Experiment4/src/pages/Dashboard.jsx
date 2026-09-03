import {BrowserRouter, Route, Routes, Link } from "react-router-dom"
function Dashboard() {


  return (
    <>
    <h1>Dashboard</h1>

    
    <Link to="/dashboard/profile">Profile </Link> |
    <Link to="/dashboard/settings">Settings </Link>
      
      
    </>
  )
}

export default Dashboard
