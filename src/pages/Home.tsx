import React from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import {
    Categories,
    PizzaItem,
    PizzaItemSkeleton,
    Search,
    Sort,
} from '../components'
import {
    setActiveCategory,
    setFilterParams,
    setOrderSort,
    setSort,
} from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzaSlice'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../redux/store'
import { PizzaType } from '../@types/types'
import { OrderSortEnum } from '../@types/enum'

const Home: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { pizzas, isLoading, error } = useAppSelector(({ pizza }) => pizza)

    const { activeCategory, sort, orderSort, search } =
        useAppSelector(({ filter }) => filter)

    const handleChangeCategory = (idx: number) => {
        dispatch(setActiveCategory(idx))
    }

    const handleChangeSort = (idxSort: number) => {
        dispatch(setSort(idxSort))
    }

    const handleChangeOrderSort = () => {
        dispatch(
            setOrderSort(
                orderSort === OrderSortEnum.DESC
                    ? OrderSortEnum.ASC
                    : OrderSortEnum.DESC
            )
        )
    }

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const os: OrderSortEnum =
                params.order === 'undefined'
                    ? OrderSortEnum.DESC
                    : OrderSortEnum.ASC

            dispatch(
                setFilterParams({
                    activeCategory: Number(params.category),
                    sort: Number(params.sort),
                    orderSort: os,
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
                        ? pizzas.map((pizza: PizzaType) => (
                              <PizzaItem key={pizza.id} pizza={pizza} />
                          ))
                        : [...new Array(8)].map((_, i) => (
                              <PizzaItemSkeleton key={i} />
                          ))}
                </div>
            ) : (
                <div className="content__error">
                    <h2>Произошла ошибка 😕</h2>
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

export default Home
