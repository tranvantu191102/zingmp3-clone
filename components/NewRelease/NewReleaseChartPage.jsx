import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import background from '../../assets/images/new-release-bg.jpg'
import MusicCardItem from '../MusicCard/MusicCardItem'

const NewReleaseChartPageContainer = styled.div`
    padding-left: 240px;
    margin-top: 70px;
    background-color: ${props => props.theme.bgColor};
    position: relative;
    padding-bottom: 100px;
`
const Background = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 380px;
    width: 100%;
`
const BackgroundContainer = styled.div`
    position: relative;
`
const Overlay = styled.div`
    position: absolute;
    height: 380px;
    inset: 0;
    z-index: 0;
    background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 37%,${props => props.theme.bgColor});
`
const OverlayBottom = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.8;
    height: 380px;
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
    font-size: 40px;
    font-weight: 700;
    color:inherit;
    margin-right: 10px;
`
const PlaylistSong = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 54px;
    /* position: absolute;
    top: 55%;
    left: 54px;
    z-index: 1; */
`
const Banner = styled.div`
    position: absolute;
    bottom: 20%;
    left: 54px;
    z-index: 1;
    width: 500px;
    height: 100px;
`

const NewReleaseChartPage = ({ data }) => {
    return (
        <NewReleaseChartPageContainer>
            <BackgroundContainer>
                <Background style={{ backgroundImage: `url(${background.src})` }}>
                </Background>
                <OverlayBottom></OverlayBottom>
                <Overlay></Overlay>
                <Content>
                    <TitleWrap>
                        <Title>{data.title}</Title>
                        <FontAwesomeIcon icon={faPlayCircle} style={{ width: '40px' }} />
                    </TitleWrap>

                </Content>
                <Banner>
                    <Image
                        src={data.banner}
                        layout='fill'
                    />
                </Banner>

            </BackgroundContainer>

            <PlaylistSong>
                {
                    data.items.map((item, index) => (
                        <MusicCardItem data={item} stt={index + 1} />
                    ))
                }
            </PlaylistSong>
        </NewReleaseChartPageContainer>
    )
}

export default NewReleaseChartPage