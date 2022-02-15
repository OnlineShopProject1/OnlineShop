import React from 'react'
import styled from 'styled-components'


function Product() {



    return (
        <ProductContainer>
            <Name>
                <div>Blumenampel</div>
            </Name>
            <Produktbild>
            <img 
            src="https://i.etsystatic.com/27455117/r/il/cdb875/3166551303/il_794xN.3166551303_mm9d.jpg"
            alt="Blumenampel"
            />
            </Produktbild>
            <Kurztext>
                <div>Testbeschreibung</div>
            </Kurztext>
            <Sterne>
            </Sterne>
            <Preis>
            </Preis>
            <AddShoppingCart>
            </AddShoppingCart>
        </ProductContainer>
    )
    }
    
    export default Product
    
    const ProductContainer = styled.div`
    `
    const Name = styled.div`
    
    `
    const Kurztext = styled.div`
        color: black;
    `
    const Sterne = styled.div`
    `
    const AddShoppingCart = styled.div`
    `
    const Produktbild = styled.div`
    `

    const Preis = styled.div`
    `