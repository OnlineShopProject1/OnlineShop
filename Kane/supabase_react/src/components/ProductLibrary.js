import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Product from './Product'
import { Supabase } from './../supabaseClient'

function ProductLibrary ({setAktuelleStueckzahl, aktuelleStueckzahl}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function test() {
            const { data, error } = await Supabase
            .from('Produkte')
            .select()
            .order('id')
            console.log(data)
            setProducts(data)
        }
            test()
    
      
    }, [])
    

    



    return (
        <Test>
            {products.map(product => <Product product={product} key={product.id} setAktuelleStueckzahl={setAktuelleStueckzahl} aktuelleStueckzahl={aktuelleStueckzahl} />)}
        </Test>
    )
}

export default ProductLibrary;

const Test = styled.div`
display: flex;
flex-direction: row;
//border-style: solid;
//flex-wrap: wrap;
//justify-content: stretch;
`


