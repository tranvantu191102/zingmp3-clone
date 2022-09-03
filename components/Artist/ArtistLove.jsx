import React from 'react'

import {
    SectionSliderContainer,
    SectionSliderTitle,
    SectionSliderMenu
} from '../SectionSlider/SectionSlider'
import ArtistLoveItem from './ArtistLoveItem'

const ArtistLove = ({ data }) => {
    return (
        <SectionSliderContainer>
            <SectionSliderTitle>{data.title}</SectionSliderTitle>
            <SectionSliderMenu>
                {
                    data.items.slice(0, 5).map((item, index) => (
                        <ArtistLoveItem data={item} key={index} />
                    ))
                }
            </SectionSliderMenu>
        </SectionSliderContainer>
    )
}

export default ArtistLove