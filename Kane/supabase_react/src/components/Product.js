import React from 'react'
import styled from 'styled-components'

function Product() {



    return (
        <ProductContainer>
            <Picture>
            </Picture>
            <Discriprion>
                <div>Testbeschreibung</div>
            </Discriprion>
            <Stars>
            </Stars>
            <AddShoppingCart>
            </AddShoppingCart>
        </ProductContainer>
    )
    }
    
    export default Product
    
    const ProductContainer = styled.div`
    `
    const Picture = styled.div`
    `
    const Discriprion = styled.div`
    color: black;
    `
    const Stars = styled.div`
    `
    const AddShoppingCart = styled.div`
    `