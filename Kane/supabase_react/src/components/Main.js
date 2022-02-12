import React from 'react'
import styled from 'styled-components'
import Product from './Product.js'

function Main() {



    return (
        <MainContainer>
            <Product />
        </MainContainer>
    )
    }
    
    export default Main

    const MainContainer = styled.div`
    grid-area: Main;
    `