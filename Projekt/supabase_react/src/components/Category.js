import React from 'react'
import styled from 'styled-components'
import image from '../picture/background.png'

function Category() {



    return (
        <CategoryContainer>
            <Categorys>
           <Column2>
           <button>Kategorie A</button>
           </Column2>
           <Column3>
           <button>Kategorie B</button>
           </Column3>
           <Column4>
           <button>Kategorie C</button>
           </Column4>
           <Column5>
           <button>Kategorie D</button>
           </Column5>
           </Categorys>
        </CategoryContainer>
    )
    }
    
    export default Category

    const CategoryContainer = styled.div`
        grid-area: Category;
        display: flex;
        justify-content: center;
        background-image: url(${image});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `

    const Categorys = styled.div`
        grid-area: Category;
        display: flex;
        height: 60px;
        text-align: center;
        justify-content: center;
        
    `
   
    const Column2 = styled.div`
        margin: 15px;
    `
    const Column3 = styled.div`
        margin: 15px;
    `
    const Column4 = styled.div`
        margin: 15px;
    `
    const Column5 = styled.div`
        margin: 15px;
    `
   