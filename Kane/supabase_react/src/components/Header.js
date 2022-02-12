import React from 'react'
import styled from 'styled-components'
import ShoppingCart from './ShoppingCart'

function Header() {



return (
    <HeaderContainer>
        <ShopName>
            <div>Yanas Knotart</div>
        </ShopName>
        <Searchbar>

        </Searchbar>
        <ShoppingCart />
    </HeaderContainer>
)
}

export default Header

const HeaderContainer = styled.div`
    grid-area: Header;
    background-color: #113044;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ShopName = styled.div`
background-color: #113044;
    color: black
`

const Searchbar = styled.div`
background-color: #113044;
`