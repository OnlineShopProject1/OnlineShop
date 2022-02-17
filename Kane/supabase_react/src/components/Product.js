import React from 'react'
import styled from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md';


function Product({product}) {



    return (
        <ProductContainer>
            <Name>
                <div>{product.name}</div>
            </Name>
            <Produktbild>
                <img src={product.produktbild}></img>
            </Produktbild>
            <Kurztext>
                {product.kurztext}
            </Kurztext>
            <Sterne>
                <div>{product.sterne}</div>
            </Sterne>
            <Preis>
            <div>{product.preis}</div>
            </Preis>
            <AddShoppingCart>
                <div><MdAddShoppingCart /></div>
            </AddShoppingCart>
        </ProductContainer>
    )
    }
    
    export default Product
    
    const ProductContainer = styled.div`
        //float: left;
        width: 50%;
        padding: 20px;
        background: #eee;
        //box-sizing: border-box;
        border-style: solid;
        margin: 5px;
     
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
    img {
        width: auto; 
        height: 100px; 
       }
    `

    const Preis = styled.div`
    `