import React from 'react'

export default function CartEmpty() {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>
                    Корзина пустая <icon>😕</icon>
                </h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.
                    <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src="/img/empty-cart.png" alt="Empty cart" />
                <a href="/" classNameName="button button--black">
                    <span>Вернуться назад</span>
                </a>
            </div>
        </div>
    )
}
