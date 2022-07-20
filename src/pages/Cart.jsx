/* eslint-disable max-len */
import React from 'react'

import CartBottom from '../components/CartBottom'
import CartItems from '../components/CartItems'
import CartTop from '../components/CartTop'

export default function Cart() {
    return (
        <div className="container container--cart">
            <div className="cart">
                <CartTop />
                <div className="content__itemsCart">
                    <CartItems />
                </div>
                <CartBottom />
            </div>
        </div>
    )
}
