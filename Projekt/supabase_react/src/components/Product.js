import React, {useState} from 'react'
import styled from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';


function Product({product}) {
    const [likes, setLikes] = useState(false)

        async function changeLike() {

            const data = {product: product.sterne}

            console.log(data, "*")

           

     }

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
            <FooterProductBox>
            <Sterne onClick={changeLike}>
                <Box>
                {product.sterne === 0 ? "00000" : ""}
                {product.sterne === 1 ? "*0000" : ""}
                {product.sterne === 2 ? "**000" : ""}
                {product.sterne === 3 ? "***00" : ""}
                {product.sterne === 4 ? "****0" : ""}
                {product.sterne === 5 ? "*****" : ""}
                {/*{for (var i = 0; i < 9; i++) {console.log(i)}}*/}
                {/*{if (product.sterne === 0) {greeting = "Good day";}}*/}
                {/*for i = 0 to 5-sterne ( Gib einen unausgefüllten STern aus )*/}
                {/*for i = 0 to Sterne ( Gib einen ausgefüllten Stern aus )*/}
                </Box>

            </Sterne>
               
                    <Preis>
                        <Box>
                    <div>{product.preis.toFixed(2)} €</div>
                    </Box>
                    </Preis>
                    <AddShoppingCart>
                        <Box>
                        <div><MdAddShoppingCart /></div>
                        </Box>
                    </AddShoppingCart>
                </FooterProductBox>
        </ProductContainer>
    )
    }
    
    export default Product
    
    const ProductContainer = styled.div`
        //float: left;
        width: 23%;
        background: #eee;
        //box-sizing: border-box;
        border-style: solid;
        margin: 5px;
        box-sizing: border-box;

        &--50 {
            flex-basis: calc(50% - 20px);
          }
          
          &--33 {
            flex-basis: calc(33.33% - 20px);
          }
        }
     
    `
    const Name = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin: 10px
    `
    const Kurztext = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    min-height: 50px
    `

    const Sterne = styled.div`
    `
    
    const AddShoppingCart = styled.div`
    font-size: 28px;
    `
    const Produktbild = styled.div`
    
    img {
        width: auto; 
        height: 100px;
        margin: auto;
        display: block; 
       }
    `

    const Preis = styled.div`
    
    `

    const Box = styled.div`
    color: white;
    font-size: 2vh;
    padding: 10px;
    background: yellowgreen;
    margin: 10px 0;
    text-align: center;
    `

    const FooterProductBox = styled.div`

    //display: flex;
    //flex-direction: row;
    //justify-content: space-between;
    //display: flex;
    //margin-right: 10px;
    //margin-left: 10px;
    //margin-top: auto;
    //margin-bottom: 10px;
    //-----------------------------------------
    
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          grid-template-columns: repeat(2, 1fr);
          grid-auto-flow: column;
          grid-gap: 10px;
          
            ${Box} {
                margin: 0;
                font-style: bold;
                }
            ${Box}:nth-child(1),
            ${Box}:nth-child(2)
            {
                grid-column: span 6;
                }
            
            ${Box}:nth-child(3),
            {
                grid-column: span 12;
                }
    `
    