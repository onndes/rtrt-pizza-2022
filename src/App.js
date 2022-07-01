import React from 'react'

import './scss/app.scss'
import Header from './Header/Header'
import Categories from './Categories/Categories'
import Sort from './Sort/Sort'
import PizzaItem from './PizzaItem/PizzaItem'

import pizzas from './assets/pizzas.json'
import PizzaItemSkeleton from './PizzaItem/PizzaItemSkeleton'

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
                        {pizzas.length > 0
                            ? pizzas.map((pizza) => (
                                  <PizzaItem key={pizza.id} {...pizza} />
                              ))
                            : [...new Array(8)].map((_, i) => (
                                  // eslint-disable-next-line max-len
                                  // eslint-disable-next-line react/no-array-index-key
                                  <PizzaItemSkeleton key={i} />
                              ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
