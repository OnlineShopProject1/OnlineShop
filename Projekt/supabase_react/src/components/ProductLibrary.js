import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Product from './Product'
import { Supabase } from './../supabaseClient'

function ProductLibrary () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function test() {
            const { data, error } = await Supabase
            .from('Produkte')
            .select()
            console.log(data)
            setProducts(data)
        }
            test()
    
      
    }, [])
    

    



    return (
        <Test>
            {products.map(product => <Product product={product} key={product.id} />)}
        </Test>
    )
}

export default ProductLibrary;

const Test = styled.div`
display: flex;
flex-direction: row;
`


