import {ShoppingCartOutlined} from '@ant-design/icons'
import {CartContext} from "../Context/CartContext";
import './cartWidget.css'
import React from 'react'

export const CartWidget = () => {
    const {cart} = React.useContext(CartContext)
    return (
        <>
            <ShoppingCartOutlined style={{ fontSize: '30px'}}/>
            {cart[0]?<p className='number'>{cart.reduce((acc, current)=>acc + current.quantity, 0)}</p>:''}
            
        </>
    )
}


