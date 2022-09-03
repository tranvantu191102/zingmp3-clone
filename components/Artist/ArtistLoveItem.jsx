import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

const ArtistLoveItemContainer = styled.div`
    background-image: linear-gradient(to bottom, #000, transparent);
    
`

const ArtistLoveItemImageWrap = styled.div`
     width: calc((100vw - 240px)/6);
    position: relative;
    height:calc((100vw - 240px)/4.5);
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
`
const ArtistLoveItemImage = styled(Image)`
 transition: all .2s ease;
     ${ArtistLoveItemImageWrap}:hover &{
        transform: scale(1.1);
        transition: all .7s ease;
     }
`
const OverLay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.2);
    visibility: hidden;
    opacity: 0;
    pointer-events: none;

    ${ArtistLoveItemImageWrap}:hover & {
        visibility: visible;
    opacity: 100;
    pointer-events: auto;
    transition: all .2s ease;
    }
`
const Icon = styled.div`
      position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    width: 50px;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;

    ${ArtistLoveItemImageWrap}:hover & {
        visibility: visible;
    opacity: 100;
    pointer-events: auto;
    transition: all .2s ease;
    }
`
const Content = styled.div`
    position: absolute;
    bottom: 5%;
    width: 100%;
`
const ContentName = styled.h3`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
`
const ContentImageWrap = styled.div`
    
`
const ContentImage = styled(Image)`
    border-radius: 4px;
`
const ContentContainer = styled.div`
width: 100%;
padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ArtistLoveItem = ({ data }) => {
    return (
        <ArtistLoveItemContainer>
            <ArtistLoveItemImageWrap>
                <ArtistLoveItemImage
                    src={data.thumbnailM}
                    layout="fill"
                />
                <OverLay></OverLay>
                <Icon>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </Icon>
                <Content>
                    <ContentName>{data.artistsNames}</ContentName>
                    <ContentContainer>
                        {data.song.items.slice(0, 3).map((item, index) => (
                            <ContentImageWrap key={index}>
                                <ContentImage
                                    src={item.thumbnail}
                                    width={50}
                                    height={50}
                                />
                            </ContentImageWrap>
                        ))}
                    </ContentContainer>
                </Content>
            </ArtistLoveItemImageWrap>
        </ArtistLoveItemContainer>
    )
}

export default ArtistLoveItem