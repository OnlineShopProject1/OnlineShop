import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { Supabase } from './../supabaseClient'

function ProductLibrary () {
    const {productId} = useParams();
    const {products} = useContext(Supabase);

    const product = products.for(let first in second) {third}



    return (
        <Test>

        </Test>
    )
}

export default ProductLibrary;

const Test = styled.div`
`


