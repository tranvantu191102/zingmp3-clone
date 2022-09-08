import React, { useEffect } from 'react'

import {
    SectionSliderContainer,
    SectionSliderTitle,
    SectionSliderMenu
} from '../SectionSlider/SectionSlider'

import EventDetail from './EventDetail'

const Event = ({ data }) => {

    useEffect(() => {
        // console.log(window.innerWidth)
    }, [])

    return (
        <SectionSliderContainer>
            <SectionSliderTitle>{data.title}</SectionSliderTitle>
            <SectionSliderMenu>
                {
                    data.items.map((item, index) => (
                        <EventDetail data={item} key={index} />
                    ))
                }
            </SectionSliderMenu>
        </SectionSliderContainer>
    )
}

export default Event