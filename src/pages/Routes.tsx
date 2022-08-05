import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Cart from './Cart'
import Home from './Home'
import NotFound from './NotFound'

const MyRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
)

export default MyRoutes
