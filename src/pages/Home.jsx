import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import Categories from '../components/Categories'
import PizzaItem from '../components/PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../components/PizzaItem/PizzaItemSkeleton'
import Sort from '../components/Sort'
import Search from '../components/Search/Search'
import { fetchPizzas } from '../redux/slices/pizzaSlice'
import {
    setActiveCategory,
    setFilterParams,
    setOrderSort,
    setSort,
} from '../redux/slices/filterSlice'

export default function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { pizzas, isLoading, error } = useSelector(({ pizza }) => pizza)
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

    React.useEffect(() => {
        const sortName = ['rating', 'price', 'title']

        dispatch(
            fetchPizzas({
                sortName: sortName[sort],
                orderSort,
                search,
                activeCategory,
            })
        )

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
            {!error ? (
                <div className="content__items">
                    {!isLoading
                        ? pizzas.map((pizza) => (
                              <PizzaItem
                                  key={pizza.id}
                                  {...pizza}
                                  pizza={pizza}
                              />
                          ))
                        : [...new Array(8)].map((_, i) => (
                              <PizzaItemSkeleton key={i} />
                          ))}
                </div>
            ) : (
                <div className="content__error">
                    <h2>
                        Произошла ошибка <icon>😕</icon>
                    </h2>
                    <p>Не удалось получить пиццы, попробуйте позже</p>
                    {error.message && (
                        <p className="content__error--message">
                            Ошибка: {error.message}
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}


