import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { MdShoppingCart } from 'react-icons/md';
import { Supabase } from './../supabaseClient'

function ShoppingCart({aktuelleStueckzahl}) {
    
      

    return (
        <CartContainer>
            <Cart>
                <AnzahlShoppingCart>
                    {aktuelleStueckzahl}
                </AnzahlShoppingCart>
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
        align-items: center;
        display: flex;
        justify-content: right;
    `

    const Cart = styled.div`
    font-size: 34px;
    display: flex;
    align-items: center;
    
    `

    const AnzahlShoppingCart = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: rgb(239,74,58);
    font-size: 20px;
    font-weight: bold;
    `