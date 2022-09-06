import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



import SectionSliderItem from './SectionSliderItem'

export const SectionSliderContainer = styled.div`
    padding: 0 54px;
    margin-bottom: 40px;
    @media (max-width: 1024px) {
        padding: 0 20px;
    }
`
export const SectionSliderTitle = styled.h3`
    margin-bottom: 16px;
    color: ${props => props.theme.mainColor};
    font-size: 20px;
    font-weight: 700;
`
export const SectionSliderMenu = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
`



const SectionSlider = ({ data, showDescription }) => {

    const [widthBrowser, setWidthBrowser] = useState(typeof window !== 'undefined' && window.innerWidth)

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
                        <SectionSliderItem item={item} key={index} index={index} showDescription={showDescription} />
                    ))
                    :
                    data.items.slice(0, 4).map((item, index) => (
                        <SectionSliderItem item={item} key={index} index={index} showDescription={showDescription} />
                    ))
                }
            </SectionSliderMenu>
        </SectionSliderContainer>
    )
}

export default SectionSlider