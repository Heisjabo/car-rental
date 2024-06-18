import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="w-full min-w-full min-h-screen flex flex-col">
    <Header />
    <div className="flex-1 w-full">
      <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default Layout
