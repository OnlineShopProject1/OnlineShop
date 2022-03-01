import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Supabase } from './../supabaseClient'




function Product({product}) {
    const [aktuelleStueckzahl, setAktuelleStuekzahl] = useState()

    //const data = {product: product.sterne}
    //var aktuelleStueckzahl = 0
    let sternestrg = ""

            for (let i=0;i<product.sterne;i++){sternestrg=sternestrg+"*"}
            for (let i=0;i<5-product.sterne;i++){sternestrg=sternestrg+"0"}
 
            
        async function test3() {
            
            
                // const blubb = aktuelleStueckzahl
               console.log(aktuelleStueckzahl)

                if (aktuelleStueckzahl > 0 )
                    upgradeCart()
                else
                    //aktuelleStueckzahl = blubb
                    addCart()
                    //console.log(data)
    
                    

                //for (let i=0;i<4;i++){Gesamtsumme = Gesamtsumme + parseInt(aktuelleStueckzahl)}
                //console.log(Gesamtsumme)
                
                
        }    
    
    
        async function addCart() {
            
            const { data, error } = await Supabase
            .from('Einkaufswagen')
            .insert([
             { user_id: 100, product_id: product.id, Bestellanzahl: 1 }
            ])
            window.location.reload()  // AJAX als alternative ???
            //console.log(aktuelleStueckzahl)
        }

         async function upgradeCart() {
            
            let neueStückzahl = parseInt(aktuelleStueckzahl)+1
            const { data, error } = await Supabase
            
            .from('Einkaufswagen')
             .update({'Bestellanzahl': neueStückzahl})
             .match({'product_id': product.id, 'Bestellanzahl': aktuelleStueckzahl})
            
            setAktuelleStuekzahl(neueStückzahl)
            window.location.reload()  // AJAX als alternative ???
            
            // 1a. Neueintrag, wenn Product ID noch nicht am identischen Tag bestellt wurde.
            
            // 2.  Aktualisieren des Counters für Anzahl Produkte im Warenkorb.

            // console.log(data, "*")
            

            // if (product.sterne === 0)
                // {SterneStrg = "00000"}

            //for i = 0 to 5-sterne ( Gib einen unausgefüllten STern aus )
            //for i = 0 to Sterne ( Gib einen ausgefüllten Stern aus )
            
           

            //{product.sterne === 0 ? SterneStrg="00000" : ""}
            //{product.sterne === 1 ? SterneStrg="*0000" : ""}
            //{product.sterne === 2 ? SterneStrg="**000" : ""}
            //{product.sterne === 3 ? SterneStrg="***00" : ""}
            //{product.sterne === 4 ? SterneStrg="****0" : ""}
            //{product.sterne === 5 ? SterneStrg="*****" : ""}
         }
            

     

     
        useEffect(() => {   
            async function readCart() {
    
                const { data, error } = await Supabase
                .from('Einkaufswagen')
                .select()
                .eq('product_id', product.id)
                let test2 = data.map((todo) => (todo.Bestellanzahl))
                //console.log(test2)
               setAktuelleStuekzahl(test2)
                
            }
            readCart();
            }, [])  

        //     function summeCart() {
        //         let Summe = parseInt(aktuelleStueckzahl)
        //         let Gesamtsumme = 0
        //         console.log(Summe)
               
        //         //console.log(Gesamtsumme)
        //     }   
            
        //    summeCart()
    
     
     

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
            <Box>
            <Sterne>
                {sternestrg [0] === "0" ? <AiOutlineStar /> : <AiFillStar />}
                {sternestrg [1] === "0" ? <AiOutlineStar /> : <AiFillStar />}
                {sternestrg [2] === "0" ? <AiOutlineStar /> : <AiFillStar />}
                {sternestrg [3] === "0" ? <AiOutlineStar /> : <AiFillStar />}
                {sternestrg [4] === "0" ? <AiOutlineStar /> : <AiFillStar />}
               
                {/*{for (var i = 0; i < 9; i++) {console.log(i)}}*/}
                {/*{if (product.sterne === 0) {greeting = "Good day";}}*/}
               
              

            </Sterne>
            </Box>
            <Box>
                    <Preis>
                        
                    <div>{product.preis.toFixed(2).toString().replace(".",",")} €</div>
                    
                    </Preis>
                    </Box>
                    <Box onClick={test3}>
                    <AddShoppingCart>
                        <MdAddShoppingCart />
                    </AddShoppingCart>
                    </Box>
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
        //border-style: solid;
        margin: 5px;
        box-sizing: border-box;
        border-radius: 10px;

        //  &--50 {
        //          flex-basis: calc(50% - 20px);
        //     }
          
        //   &--33 {
        //         flex-basis: calc(33.33% - 20px);
        //     }
       
     
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
        font-size: 15px;
    `
    
    const AddShoppingCart = styled.div`
        font-size: 40px;

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
        display: flex;
        color: white;
        font-size: 2vh;
        padding: 10px;
        background: yellowgreen;
        margin: 10px 0;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
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
          grid-template-columns: repeat(4, 1fr);
          grid-auto-flow: column;
          grid-gap: 10px;
          
            ${Box} {
                margin: 0;
                font-style: bold;
                },
            ${Box}:nth-child(1),
            ${Box}:nth-child(2)
            {
                grid-column: span 2;
                grid-row: span 1;
                }
            
            ${Box}:nth-child(3)
            {
                grid-column: span 2;
                grid-row: span 2;
                }
    `
    