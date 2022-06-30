import React from 'react'

import './scss/app.scss'
import Header from './Header/Header'
import Categories from './Categories/Categories'
import Sort from './Sort/Sort'
import PizzaItem from './PizzaItem/PizzaItem'

import pizzas from './assets/pizzas.json'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map((pizza) => (
                            <PizzaItem key={pizza.id} {...pizza} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
