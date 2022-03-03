import React from 'react'
import styled from 'styled-components'
import Product from './Product.js'
import ProductLibrary from './ProductLibrary'

function Main({setAktuelleStueckzahl, aktuelleStueckzahl}) {
    


    return (
        <MainContainer>
            <ProductLibrary setAktuelleStueckzahl={setAktuelleStueckzahl} aktuelleStueckzahl={aktuelleStueckzahl} />
        </MainContainer>
    )
    }
    
    export default Main

    const MainContainer = styled.div`
        grid-area: Main;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `