import React from 'react'
import styled from 'styled-components'
import { MdShoppingCart } from 'react-icons/md';


function ShoppingCart() {



    return (
        <CartContainer>
            <Cart>
                <MdShoppingCart />
            </Cart>
        </CartContainer>
    )
    }
    
    export default ShoppingCart

    const CartContainer = styled.div`
        background-color: #fffff;
        margin-right: 20px;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        width: 25%;
        text-align: right;
        display: flex;
        justify-content: right;
        
    `

    const Cart = styled.div`
    font-size: 34px;
    `