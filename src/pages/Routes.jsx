import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import NotFound from './NotFound'

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
