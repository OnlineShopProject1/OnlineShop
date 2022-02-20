import React from 'react'
import styled from 'styled-components'


function ShoppingCart() {



    return (
        <CartContainer>
            <Cart>
                <div>Einkaufswagen</div>
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

    `