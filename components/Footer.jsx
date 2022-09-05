import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import beggers from '../assets/images/beggers.png'
import empire from '../assets/images/empire.png'
import fuga from '../assets/images/FUGA.png'
import kakao from '../assets/images/Kakao-M.png'
import monstercat from '../assets/images/monstercat.png'
import orcahrd from '../assets/images/orcahrd.png'
import sony from '../assets/images/sony.png'
import yg from '../assets/images/yg.png'
import universal from '../assets/images/universal-1.png'
import sm from '../assets/images/SM-Entertainment.png'

const FooterContainer = styled.div`
    padding: 0 54px;
    margin-top: 40px;
    padding-bottom: 50px;
`
const FooterTitle = styled.h3`
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.mainColor};
    text-align: center;
`
const FooterMenu = styled.div`
     width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const FooterImageContainer = styled.div`
    width: 12.5%;
    margin-right: 10px;
    margin-bottom: 20px;
   /* height: 50px; */
`
const FooterImageWrap = styled.div`
    width: 100%;
    height: 56px;
    padding: 5px;
    background-color:${props => props.theme.footerColor};
    overflow: hidden;
    border-radius: 4px;

`
const FooterImage = styled.div`
    max-width: 90%;
    max-height: 80%;
    height: 100%;
    width: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`
const footerMenu = [
    { image: empire },
    { image: sony },
    { image: beggers },
    { image: monstercat },
    { image: sm },
    { image: universal },
    { image: fuga },
    { image: orcahrd },
    { image: yg },
    { image: kakao },
]

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTitle>ĐỐI TÁC ÂM NHẠC</FooterTitle>
            <FooterMenu>
                {
                    footerMenu.map((item, index) => (
                        <FooterImageContainer key={index}>
                            <FooterImageWrap>
                                <FooterImage
                                    style={{ backgroundImage: `url(${item.image.src})` }}
                                />
                            </FooterImageWrap>
                        </FooterImageContainer>
                    ))
                }

            </FooterMenu>
        </FooterContainer>
    )
}

export default Footer