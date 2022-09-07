import React from 'react'
import styled from 'styled-components'

import background from '../../assets/images/banner-top100.png'
import {
    SectionSliderContainer,
    SectionSliderTitle
} from '../SectionSlider/SectionSlider'
import SectionSliderItem from '../SectionSlider/SectionSliderItem'

const Container = styled.div`
    padding-left: 240px;
    margin-top: 70px;
    background-color: ${props => props.theme.bgColor};
    position: relative;
    padding-bottom: 100px;

    @media (max-width: 1024px) {
        padding-left: 70px;
    }
`
const Background = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 260px;
    width: 100%;
`
const BackgroundContainer = styled.div`
    position: relative;
`
const Overlay = styled.div`
    position: absolute;
    height: 260px;
    inset: 0;
    z-index: 0;
    background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 37%,${props => props.theme.bgColor});
`
const OverlayBottom = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.8;
    height: 260px;
    z-index: 1;
    background-image: linear-gradient(180deg,${props => props.theme.bgColor},${props => props.theme.bgColor});
`
const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.activeColor};
    justify-content: flex-start;
`
const Content = styled.div`
    position: absolute;
    bottom: 50%;
    transform: translateY(-50%);
    left: 54px;
    z-index: 1;
`
const Title = styled.div`
    font-size: 50px;
    font-weight: 900;
    color:inherit;
    margin-right: 10px;
`
const SectionSliderMenu = styled.div`
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const Top100 = ({ data }) => {

    console.log(data)
    return (
        <Container>
            <BackgroundContainer>
                <Background style={{ backgroundImage: `url(${background.src})` }}>
                </Background>
                <OverlayBottom></OverlayBottom>
                <Overlay></Overlay>
                <Content>
                    <TitleWrap>
                        <Title>Top 100</Title>
                    </TitleWrap>
                </Content>
            </BackgroundContainer>
            <div>
                {
                    data.map((item, index) => (
                        <SectionSliderContainer key={index}>
                            <SectionSliderTitle>{item.title}</SectionSliderTitle>
                            <SectionSliderMenu>
                                {
                                    item.items.map((el, i) => (
                                        <SectionSliderItem item={el} key={i} index={i} showDescription={false} />
                                    ))
                                }
                            </SectionSliderMenu>
                        </SectionSliderContainer>
                    ))
                }
            </div>
        </Container>
    )
}

export default Top100