import React from 'react'
import styled from 'styled-components'

function Footer() {



    return (
        <FooterContainer>
            <Links>
                <i><b>Über Yanas Knotart</b></i>
                <link>Datenschutzerklärung</link>
                <link>Wiederrufsrecht</link>
                <link>rel="Impressum" href="https://www.google.de/"</link>
            </Links>
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
    `

    const Links = styled.div`
    color: black;
    `

    const SocialMedia = styled.div`
    `