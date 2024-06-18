import React from 'react'
import { Routes, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const Home = () => {
  return (
        <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Homepage />} /> */}
    </Routes>
  )
}

export default Home
