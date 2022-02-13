import React from 'react'
import styled from 'styled-components'

function Footer() {



    return (
        <FooterContainer>
            <Links>
                <div><b>Über Yanas Knotart</b></div>
                <div>Datenschutzerklärung</div>
                <div>Wiederrufsrecht</div>
                <div>Impressum</div>
            </Links>
            <Column2></Column2>
            <Column3></Column3>
            <Column4></Column4>
            <Column5></Column5>
            <SocialMedia>
                <div>
                    Youtube
                </div>
                <div>
                    Pinterest
                </div>
                <div>
                    Facebook
                </div>
                <div>
                    Instagram
                </div>
            </SocialMedia>
        </FooterContainer>
    )
    }
    
    export default Footer

    const FooterContainer = styled.div`
        grid-area: Footer;
        background-color: orange;
        display: flex;
    `

    const Links = styled.div`
        color: black;
    `

    const SocialMedia = styled.div`
    `

    const Column2 = styled.div`
    `
    const Column3 = styled.div`
    `
    const Column4 = styled.div`
    `
    const Column5 = styled.div`
    `