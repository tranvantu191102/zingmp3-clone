import React from 'react'
import styled from 'styled-components'

import BannerSlider from '../BannerSlider'
import SectionSlider from '../SectionSlider/SectionSlider'
import NewRelease from '../NewRelease/NewRelease'
import ArtistLove from '../Artist/ArtistLove'
import Event from '../Event/Event'

const CenterContainer = styled.div`
    padding-left: 240px;
    margin-top: 70px;
    background-color: ${props => props.theme.bgColor};
`

const Center = ({ data }) => {

    // console.log(data)
    return (
        <CenterContainer>
            <BannerSlider data={data[0]} />
            <NewRelease data={data[1]} />
            <SectionSlider data={data[2]} />
            <ArtistLove data={data[3]} />
            <SectionSlider data={data[4]} />
            <SectionSlider data={data[7]} />
            <SectionSlider data={data[8]} />
            <SectionSlider data={data[9]} />
            <Event data={data[10]} />
        </CenterContainer>
    )
}

export default Center