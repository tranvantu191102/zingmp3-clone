import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import getTime from '../../utils/getTime'
import MusicCardOptions from '../MusicCard/MusicCardOptions'

const MusicCardContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: start;
    position: relative;
    align-items: center;
    position: relative;
    padding: 10px;
    margin: 10px 0;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: ${props => props.theme.secondBgColor};
    }
`
const MusicCardImageWrap = styled.div`
    margin-right: 8px;
`
const MusicTitle = styled.h3`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.mainColor};
    padding: 0;
    margin: 0;
`
const MusicArtists = styled.div`
    display: flex;
    align-items: center;
    margin: 6px 0;
`
const MusicArtistsItem = styled.div`
    font-size: 12px;
    color: ${props => props.theme.secondTextColor};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.hoverColor};
    }
`
const MusicTime = styled.div`
     font-size: 12px;
    color: ${props => props.theme.secondTextColor};
`
const MusicIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 30px;
    color: ${props => props.theme.mainColor};
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;

    &:hover {
        background-color:${props => props.theme.bgColor};
    }

    ${MusicCardContainer}:hover & {
        visibility: visible;
    opacity: 100;
    pointer-events: auto;
    transition: all .2s ease;
    }
`
const Another = styled.div`
     position: absolute;
   visibility: hidden;
   opacity: 0;
    top: -25px;
    right: 0;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: 50px;
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    border-radius: 10px;
    z-index: 99999;
    font-size: 12px;
    padding: 2px;
    text-align: center;

    &::before{
        position: absolute;
        content: '';
        bottom: -5px;
        right: 10px;
        border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-top: 8px solid #000;
    }

    ${MusicIcon}:hover & {
        visibility: visible;
   opacity: 100;
   transition:visibility .2s ease, opacity .2s ease ;
    }
`

const MusicCard = ({ music, lastItem }) => {
    const [showOptions, setShowOptions] = useState(false)
    const toggleRef = useRef(null)
    const handleShowOption = () => {
        setShowOptions(true)
    }
    return (
        <MusicCardContainer>
            <MusicCardImageWrap>
                <Image
                    src={music.thumbnail}
                    width={60}
                    height={60}
                    style={{
                        borderRadius: '6px'
                    }}
                />
            </MusicCardImageWrap>
            <div>
                <MusicTitle className='text-limit-one-line '>{music.title}</MusicTitle>
                <MusicArtists>
                    {
                        music.artists.map((artist, index) => (
                            <Link key={index} href={`/nghe-si/${artist.id}`}>
                                <MusicArtistsItem>{`${index > 0 ? ', ' : ''}${artist.name}`}</MusicArtistsItem>
                            </Link>
                        ))
                    }
                </MusicArtists>
                <MusicTime>{getTime(music.releaseDate)}</MusicTime>
            </div>
            <MusicIcon onClick={handleShowOption} ref={toggleRef}>
                <FontAwesomeIcon icon={faEllipsisH} />
                <Another>
                    Khác
                </Another>
            </MusicIcon>
            <MusicCardOptions
                active={showOptions}
                setShowOptions={setShowOptions}
                toggleRef={toggleRef}
                lastItem={lastItem}
            />
        </MusicCardContainer>
    )
}

export default MusicCard