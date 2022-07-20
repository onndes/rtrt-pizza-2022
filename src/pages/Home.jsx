import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import Categories from '../components/Categories/Categories'
import PizzaItem from '../components/PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../components/PizzaItem/PizzaItemSkeleton'
import Sort from '../components/Sort/Sort'
import Search from '../components/Search/Search'
import { setPizzas } from '../redux/slices/pizzaSlice'
import {
    setActiveCategory,
    setFilterParams,
    setOrderSort,
    setSort,
} from '../redux/slices/filterSlice'

export default function Home() {
    const navigate = useNavigate()
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
        dispatch(setOrderSort(orderSort === 'desc' ? 'asc' : 'desc'))
    }

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

            dispatch(
                setFilterParams({
                    ...params,
                })
            )
        }
    }, [])

    // !TEMP fetch
    React.useEffect(() => {
        const sortName = ['rating', 'price', 'title']
        const baseUrl = 'https://62bdb91fc5ad14c110c5676f.mockapi.io/'

        // eslint-disable-next-line max-len
        let link = `${baseUrl}items?sortBy=${sortName[sort]}&order=${orderSort}&search=${search}`

        if (activeCategory !== 0) {
            link += `&category=${activeCategory}`
        }

        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setPizzas(data))
            })

        window.scroll(0, 0)
    }, [activeCategory, sort, orderSort, search])

    React.useEffect(() => {
        const queryString = qs.stringify({
            sort,
            order: orderSort,
            category: activeCategory,
        })

        navigate(`?${queryString}`)
    }, [activeCategory, sort, orderSort])

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
            <Search
                handleChangeCategory={handleChangeCategory}
                activeCategory={activeCategory}
            />
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
