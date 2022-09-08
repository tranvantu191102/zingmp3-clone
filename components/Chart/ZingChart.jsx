import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const ZingChartContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 54px;
    justify-content: space-between;

    @media (max-width: 1024px) {
        padding: 0 20px;
    }
`
const ZingChartItem = styled(Link)`
`
const ImageWrap = styled.div`
      overflow: hidden;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    width: 30%;
    height: 100px;
    @media (max-width: 1024px) {
        width: 32%;
    }
`
const ImageMain = styled(Image)`
     border-radius: 10px;
     transition: all .8s ease;
     ${ImageWrap}:hover & {
        transform: scale(1.1);
        transition: all .8s ease;
     }
`


const ZingChart = ({ data }) => {
    return (
        <ZingChartContainer>
            {
                data.items.map((item, index) => (
                    <ZingChartItem href={`/chart/${item.country}`} key={index}>
                        <ImageWrap >
                            <ImageMain
                                src={item.cover}
                                layout="fill"
                            />
                        </ImageWrap>
                    </ZingChartItem>
                ))
            }
        </ZingChartContainer>
    )
}

export default ZingChart