import React from 'react'
import {Routes,Route} from "react-router-dom"
import Bags from '../Pages/Bags'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Men from '../Pages/Men'
import Wishlist from '../Pages/Wishlist'
import Women from '../Pages/Women'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/bags" element={<Bags/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default AllRoutes