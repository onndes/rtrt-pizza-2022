import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SuspensePreloader } from '../components'

import MainLayout from '../layouts/MainLayout'
import Home from './Home'
import NotFound from './NotFound'

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './Cart'))

const MyRoutes: React.FC = () => (
    <React.Suspense fallback={<SuspensePreloader />}>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </React.Suspense>
)

export default MyRoutes
