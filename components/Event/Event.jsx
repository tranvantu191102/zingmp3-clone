import React from 'react'

import {
    SectionSliderContainer,
    SectionSliderTitle,
    SectionSliderMenu
} from '../SectionSlider/SectionSlider'

import EventDetail from './EventDetail'

const Event = ({ data }) => {
    console.log(data)

    return (
        <SectionSliderContainer>
            <SectionSliderTitle>{data.title}</SectionSliderTitle>
            <SectionSliderMenu>
                {
                    data.items.slice(0, 3).map((item, index) => (
                        <EventDetail data={item} key={index} />
                    ))
                }
            </SectionSliderMenu>
        </SectionSliderContainer>
    )
}

export default Event