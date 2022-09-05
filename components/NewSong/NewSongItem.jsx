import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'


import { getTimeNewSong } from '../../utils/getTime'

const NewSongItemContainer = styled.div`
    padding: 15px;
    margin: 10px 4px;
    border-radius: 6px;
    box-shadow: 0 2px 10px 0 #cfcfcf66;
    display:  flex;
    align-items: flex-start;
    justify-content: start;
    min-height: 160px;
    /* width: 33%; */

    @media (max-width: 1024px) {
        /* width: 50%; */
    }
`
const ImageWrap = styled.div`
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    width: 120px;
    height: 120px;
`
const ImageMain = styled(Image)`
    border-radius: 10px;
  
    ${ImageWrap}:hover &{
        transform: scale(1.1);
        transition: all .5s ease;
    }
`
const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.2);
    visibility: hidden;
    opacity: 0;
    pointer-events: none;

    ${ImageWrap}:hover &{
        visibility: visible;
        opacity: 100;
        pointer-events: auto;
        transition: all .5s ease;
    }
`
const IconPlay = styled.div`
    position: absolute;
   top: 50%;
   left: 50%;
   width: 40px;
   transform:  translate(-50%,-50%);
    z-index: 99999;
    visibility: hidden;
    color: #fff;
    opacity: 0;
    pointer-events: none;

    ${ImageWrap}:hover &{
        visibility: visible;
        opacity: 100;
        pointer-events: auto;
        transition: all .5s ease;
    }
`
const Info = styled.div`
    margin-left: 10px;
    flex: 1;
`
const Title = styled.h3`
    font-size: 16px;
    color: ${props => props.theme.mainColor};
    font-weight: 700;
    padding: 0;
    margin: 4px 0;
`
export const ArtistsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`
export const Artist = styled.div`
    font-size: 12px;
    color:${props => props.theme.secondColor};
    &:hover {
        color:${props => props.theme.hoverColor};
        cursor: pointer;
    }
`
const Place = styled.div`
    margin-top: 30px;
      display: flex;
    align-items: flex-end;
    justify-content: space-between;
`
const Number = styled.div`
    -webkit-text-stroke: 1px ${props => props.theme.mainColor};
    font-size: 40px;
    font-weight: 900;
    color: transparent;
    line-height: 1;
    font-family: "Roboto",sans-serif;
`
const DayRelease = styled.div`
    font-size: 16px;
    color:${props => props.theme.mainColor};
    font-weight: 600;
`

const NewSongItem = ({ data, index }) => {
    return (
        <NewSongItemContainer>
            <ImageWrap>
                <ImageMain
                    src={data.thumbnailM}
                    layout='fill'
                />
                <Overlay></Overlay>
                <IconPlay>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </IconPlay>
            </ImageWrap>
            <Info>
                <Title className='text-limit-one-line'>{data.title}</Title>
                <ArtistsContainer>
                    {
                        data.artists.map((item, index) => (
                            <Link key={index} href={`/artists/${item.alias}`}>
                                <Artist >{`${index > 0 ? ', ' : ''}${item.name}`}</Artist>
                            </Link>
                        ))
                    }
                </ArtistsContainer>
                <Place>
                    <Number>{`#${index + 1}`}</Number>
                    <DayRelease>{getTimeNewSong(data.releaseDate)}</DayRelease>
                </Place>
            </Info>
        </NewSongItemContainer>
    )
}

export default NewSongItem