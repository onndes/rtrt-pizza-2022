import React from 'react'

import './scss/app.scss'
import Header from './Header/Header'
import MyRoutes from './pages/Routes'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <MyRoutes />
            </div>
        </div>
    )
}

export default App
