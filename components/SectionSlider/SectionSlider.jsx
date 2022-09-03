import React from 'react'
import styled from 'styled-components'


import SectionSliderItem from './SectionSliderItem'

export const SectionSliderContainer = styled.div`
    padding: 0 54px;
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
`



const SectionSlider = ({ data }) => {

    return (
        <SectionSliderContainer>
            <SectionSliderTitle>{data.title}</SectionSliderTitle>
            <SectionSliderMenu>
                {
                    data.items.slice(0, 5).map((item, index) => (
                        <SectionSliderItem item={item} key={index} index={index} />
                    ))
                }
            </SectionSliderMenu>
        </SectionSliderContainer>
    )
}

export default SectionSlider