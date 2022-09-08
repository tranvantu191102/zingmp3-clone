import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import background from '../../assets/images/week-chart-bg.jpg'

import {
    NewReleaseChartPageContainer,
    BackgroundContainer,
    Background,
    OverlayBottom,
    Overlay,
    Content,
    TitleWrap,
    Title,
    PlaylistSong
} from '../NewRelease/NewReleaseChartPage'
import MusicCardItem from '../MusicCard/MusicCardItem'

const ZingChartPage = ({ data }) => {
    return (
        <NewReleaseChartPageContainer>
            <BackgroundContainer>
                <Background style={{ backgroundImage: `url(${background.src})` }}>
                </Background>
                <OverlayBottom></OverlayBottom>
                <Overlay></Overlay>
                <Content>
                    <TitleWrap>
                        <Title>#zingchart</Title>
                        <FontAwesomeIcon icon={faPlayCircle} style={{ width: '40px', fontSize: '40px' }} />
                    </TitleWrap>

                </Content>

            </BackgroundContainer>

            <PlaylistSong>
                {
                    data.RTChart.items.map((item, index) => (
                        <MusicCardItem data={item} stt={index + 1} />
                    ))
                }
            </PlaylistSong>
        </NewReleaseChartPageContainer>
    )
}

export default ZingChartPage