import React from 'react'
import styled from 'styled-components'

import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaPinterestSquare } from 'react-icons/fa';

import { v1 } from "@userlike/messenger";

const openURL = "www.google.de"

function Footer() {



    return (
        <FooterContainer>
            <Links>
                <div><b>Über Yanas Knotart</b></div>
                <div>Datenschutzerklärung</div>
                <div>Widerrufsrecht</div>
                <div>Impressum</div>
            </Links>
            <SocialMedia>
                <Youtube>
                    <AiFillYoutube /> 
                </Youtube>
                <Pinteres>
                    <FaPinterestSquare />
                </Pinteres>
                <Facebook>
                    <AiFillFacebook />
                </Facebook>
                <Instagram>
                    <AiFillInstagram onClick={() => {window.location.href="https://www.instagram.com/yanas_knotart/"}} />
                </Instagram>
            </SocialMedia>
        </FooterContainer>
    )
    }
    
    export default Footer

    const FooterContainer = styled.div`
        grid-area: Footer;
        background-color: orange;
        display: flex;
        justify-content: center;
        width: 100%;
        
    `

    const Links = styled.div`
        color: black;
        justify-content: left;
        margin-left: 20px;
        margin-right: auto;
        margin-top: 30px;
        margin-bottom: 30px;
    `

    const SocialMedia = styled.div`
        display: flex;
        margin-right: 20px;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: 20px;
        font-size: 34px;
    `

    const Youtube = styled.div`
    `
    const Pinteres = styled.div`
    `
    const Facebook = styled.div`
    `
    const Instagram = styled.div`
    `