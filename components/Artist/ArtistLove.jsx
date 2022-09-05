import React, { useState, useEffect } from 'react'

import {
    SectionSliderContainer,
    SectionSliderTitle,
    SectionSliderMenu
} from '../SectionSlider/SectionSlider'
import ArtistLoveItem from './ArtistLoveItem'

const ArtistLove = ({ data }) => {
    const [widthBrowser, setWidthBrowser] = useState(window.innerWidth)

    useEffect(() => {
        const handler = (e) => {
            setWidthBrowser(e.target.innerWidth)
        }

        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])
    return (
        <SectionSliderContainer>
            <SectionSliderTitle>{data.title}</SectionSliderTitle>
            <SectionSliderMenu>
                {widthBrowser > 1024 ?
                    data.items.slice(0, 5).map((item, index) => (
                        <ArtistLoveItem data={item} key={index} />
                    ))
                    :
                    data.items.slice(0, 4).map((item, index) => (
                        <ArtistLoveItem data={item} key={index} />
                    ))
                }
            </SectionSliderMenu>
        </SectionSliderContainer>
    )
}

export default ArtistLove