import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function PrivateComponent() {
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('user')
  return (
   isLoggedIn ? <Outlet />:navigate('/signup')
  )
}

export default PrivateComponent