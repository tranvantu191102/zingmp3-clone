import React from 'react'
import styled from 'styled-components'

import BannerSlider from '../BannerSlider'
import SectionSlider from '../SectionSlider/SectionSlider'
import NewRelease from '../NewRelease/NewRelease'
import ArtistLove from '../Artist/ArtistLove'
import Event from '../Event/Event'
import NewSong from '../NewSong/NewSong'
import Footer from '../Footer'
import ChartHome from '../Chart/ChartHome'
import ZingChart from '../Chart/ZingChart'

const CenterContainer = styled.div`
    padding-left: 240px;
    margin-top: 70px;
    background-color: ${props => props.theme.bgColor};
`

const Center = ({ data }) => {

    const { banner, playlist, event, release, mix, weekChart, rtChart, newReleaseChart, artistSpotlight } = data

    return (
        <CenterContainer>
            <BannerSlider data={banner[0]} />
            <NewRelease data={release[0]} />
            <ArtistLove data={mix[0]} />
            {/* <ChartHome data={rtChart[0]} /> */}
            <ZingChart data={weekChart[0]} />
            {
                playlist.map((item, index) => {
                    if (index === 3) {
                        return (
                            <>
                                <NewSong data={newReleaseChart[0]} />
                                <SectionSlider data={item} key={index} showDescription={index === 0 || index === 4} />
                            </>
                        )
                    }
                    return (
                        <SectionSlider data={item} key={index} showDescription={index === 0 || index === 4} />
                    )
                })
            }
            <Event data={event[0]} />
            <Footer />
        </CenterContainer>
    )
}

export default Center