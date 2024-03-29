import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PizzaType } from '../../@types/types'
import { addPizzaToCart, selectCartItems } from '../../redux/slices/cartSlice'

type PizzaItemProps = {
    pizza: PizzaType
}

export const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
    const dispatch = useDispatch()

    const pizzasCart = useSelector(selectCartItems)

    const [selectedSize, setSelectedSize] = React.useState<number>(
        pizza.sizes[0]
    )
    const [selectedType, setSelectedType] = React.useState<number>(
        pizza.types[0]
    )

    let countPizza = 0

    pizzasCart.forEach((i) => {
        if (i.pizza.id === pizza.id) {
            countPizza += i.options.count
        }
    })

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={pizza.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizza.title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {pizza.types.map((type) => (
                        <li
                            key={type}
                            className={type === selectedType ? 'active' : ''}
                            onClick={() => setSelectedType(type)}
                        >
                            {type === 0 ? 'тонкое' : 'традиционное'}
                        </li>
                    ))}
                </ul>
                <ul>
                    {pizza.sizes.map((size) => (
                        <li
                            key={size}
                            className={size === selectedSize ? 'active' : ''}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizza.price} ₴</div>

                <div
                    className="button button--outline button--add"
                    onClick={() => {
                        dispatch(
                            addPizzaToCart({
                                ...pizza,
                                selectedSize,
                                selectedType,
                            })
                        )
                    }}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            // eslint-disable-next-line max-len
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{countPizza}</i>
                </div>
            </div>
        </div>
    )
}
