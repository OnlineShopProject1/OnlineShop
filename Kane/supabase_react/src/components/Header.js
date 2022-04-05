import React, {useState} from 'react'
import styled from 'styled-components'
import ShoppingCart from './ShoppingCart'



function Header({aktuelleStueckzahl}) {
    




return (
    <HeaderContainer>
        <Flexbox>
        <ShopName>
            <div>Yanas Knotart</div>
        </ShopName>
        <Searchbar>
            <input placeholder='Shop durchsuchen'></input>
        </Searchbar>
        <ShoppingCart aktuelleStueckzahl={aktuelleStueckzahl} />
        </Flexbox>
    </HeaderContainer>
)
}

export default Header

const HeaderContainer = styled.div`
    grid-area: Header;
    background-color: white;
    position: sticky;
    text-align: center;
    justify-content: center;
    padding: 0;
    width: 100%;
    top: 0;
    z-index:99;
    margin: auto;
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ShopName = styled.div`
    background color: grey;
    display: flex;
    justify-content: left;
    margin-left: 20px;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 35px;
    width: 25%;
`

const Searchbar = styled.div`
    background color: grey;
    display: flex;
    justify-content: center;
    margin: auto;
    width: 50%;
`