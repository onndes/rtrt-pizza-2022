import React from 'react'

import Categories from '../Categories/Categories'
import PizzaItem from '../PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'
import Sort from '../Sort/Sort'

import pizzas from '../assets/pizzas.json'

export default function Home() {
    return (
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
    )
}
