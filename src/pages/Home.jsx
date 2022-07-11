import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Categories from '../components/Categories/Categories'
import PizzaItem from '../components/PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../components/PizzaItem/PizzaItemSkeleton'
import Sort from '../components/Sort/Sort'
import Search from '../components/Search/Search'
import { setPizzas } from '../redux/slices/pizzaSlice'
import {
    setActiveCategory,
    setOrderSort,
    setSort,
    setSearch,
} from '../redux/slices/filterSlice'

export default function Home() {
    const dispatch = useDispatch()

    const pizzas = useSelector(({ pizza }) => pizza.pizzas)
    const { activeCategory, sort, orderSort, search } = useSelector(
        ({ filter }) => filter
    )

    const handleChangeCategory = (idx) => {
        dispatch(setActiveCategory(idx))
    }

    const handleChangeSort = (idxSort) => {
        dispatch(setSort(idxSort))
    }

    const handleChangeOrderSort = () => {
        dispatch(setOrderSort(!orderSort))
    }

    const handleChangeSearch = (inputData) => {
        dispatch(setSearch(inputData))
    }

    // !TEMP fetch
    React.useEffect(() => {
        const sortName = ['rating', 'price', 'title']

        // eslint-disable-next-line max-len
        let link = `https://62bdb91fc5ad14c110c5676f.mockapi.io/items?sortBy=${
            sortName[sort]
        }&order=${orderSort ? 'desc' : 'asc'}`
        
        if (activeCategory !== 0) {
            link += `&category=${activeCategory}`
        }
        
        // !Optimize this
        if (search.length > 0) {
            link += `&search=${search}`
        }

        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setPizzas(data))
                window.scroll(0, 0)
            })
    }, [activeCategory, sort, orderSort, dispatch, search])

    // !TEMP fetch
    React.useEffect(() => {
        fetch(
            // eslint-disable-next-line max-len
            `https://62bdb91fc5ad14c110c5676f.mockapi.io/items/?sortBy=rating&order=desc`
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch(setPizzas(data))
                window.scroll(0, 0)
            })
    }, [dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={activeCategory}
                    handleChangeCategory={handleChangeCategory}
                />
                <Sort
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    orderSort={orderSort}
                    handleChangeOrderSort={handleChangeOrderSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Search search={search} handleChangeSearch={handleChangeSearch} />
            <div className="content__items">
                {pizzas.length > 0
                    ? pizzas.map((pizza) => (
                          <PizzaItem key={pizza.id} {...pizza} />
                      ))
                    : [...new Array(8)].map((_, i) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <PizzaItemSkeleton key={i} />
                      ))}
            </div>
        </div>
    )
}
