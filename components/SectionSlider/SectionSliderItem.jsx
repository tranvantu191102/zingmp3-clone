import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import MusicCardOptions from '../MusicCard/MusicCardOptions'

import { ArtistsContainer, Artist } from '../NewSong/NewSongItem'

const SectionSliderItemContainer = styled.div`
    width: 20%;
    position: relative;

    /* @media (max-width: 1024px) {
        width: 30%;
    } */
`
const SectionSliderImageWrap = styled.div`
    width: calc((100vw - 240px)/6);
    height:calc((100vw - 240px)/6);
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 1024px) {
        width: calc((100vw - 240px)/4);
    height:calc((100vw - 240px)/4);
    }
`
const SectionSliderImage = styled(Image)`
    border-radius: 10px;
    transition: transform .4s ease;
    ${SectionSliderImageWrap}:hover & {
        transform: scale(1.1);
    }
`
const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.5);
    visibility: hidden;
    opacity: 0;
    pointer-events: none;

    ${SectionSliderImageWrap}:hover & {
        visibility: visible;
    opacity: 100;
    pointer-events: auto;
    transition: all .3s ease;
    }
`
const SectionSliderOption = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    padding: 0 10px;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;

    ${SectionSliderImageWrap}:hover & {
        visibility: visible;
    opacity: 100;
    pointer-events: auto;
    transition: all .3s ease;
    }
`
const SectionSliderOptionItem = styled.div`
    width: 20%;
    padding: 4px 6px;
    display: flex;
    align-items: center;
    position: relative;
    &:hover {
        background-color: rgba(255,255,255,0.2);
        border-radius: 50%;
    }
`

const SectionSliderOptionItemPlay = styled.div`
    width: 25%;
   &:hover {
    width: 30%;
    transition: width .1s ease;
   }

`
const AddLibrary = styled.div`
   position: absolute;
   visibility: hidden;
   opacity: 0;
    top: -30px;
    left: 0;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: 120px;
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
        left: 10px;
        border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-top: 8px solid #000;
    }

    ${SectionSliderOptionItem}:hover & {
        visibility: visible;
   opacity: 100;
   transition:visibility .2s ease, opacity .2s ease ;
    }
`
const Another = styled.div`
 position: absolute;
   visibility: hidden;
   opacity: 0;
    top: -30px;
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

    ${SectionSliderOptionItem}:hover & {
        visibility: visible;
   opacity: 100;
   transition:visibility .2s ease, opacity .2s ease ;
    }
`
const Title = styled.h4`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.mainColor};
    cursor: pointer;
    padding: 4px 0;
    margin: 0;

    &:hover {
        color: ${props => props.theme.hoverColor};
    }
`
const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.secondTextColor};
    margin: 0;
    cursor: auto;
`

const SectionSliderItem = ({ item, index, showDescription }) => {
    const [showOptions, setShowOptions] = useState(false)
    const toggleRef = useRef()
    const handleShowOption = () => {
        setShowOptions(true)
    }
    return (
        <SectionSliderItemContainer >
            <SectionSliderImageWrap>
                <SectionSliderImage
                    src={item.thumbnailM}
                    width='100%'
                    height='100%'
                    layout="fill"
                />
                <Overlay></Overlay>
                <SectionSliderOption>
                    <SectionSliderOptionItem>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: '#ffffff', }}
                            size="2xs"
                        />
                        <AddLibrary>
                            Thêm vào thư viện
                        </AddLibrary>
                    </SectionSliderOptionItem>
                    <SectionSliderOptionItemPlay>
                        <FontAwesomeIcon icon={faPlayCircle}
                            style={{ color: '#ffffff' }}
                        />
                    </SectionSliderOptionItemPlay>
                    <SectionSliderOptionItem onClick={handleShowOption} ref={toggleRef}>
                        <FontAwesomeIcon icon={faEllipsisH}
                            style={{ color: '#ffffff' }}
                        />
                        <Another>
                            Khác
                        </Another>

                    </SectionSliderOptionItem>
                </SectionSliderOption>

            </SectionSliderImageWrap>
            <Title className='text-limit-one-line '>{item.title}</Title>
            {
                showDescription ?
                    <Description className='text-limit-two-line '>{item.sortDescription}</Description>
                    :
                    <ArtistsContainer className="text-limit-two-line">
                        {
                            item?.artists?.map((el, i) => (
                                <Link key={i} href={`/artists/${el.alias}`}>
                                    <Artist >{`${i > 0 ? ', ' : ''}${el.name}`}</Artist>
                                </Link>
                            ))
                        }
                    </ArtistsContainer>
            }
            <MusicCardOptions
                active={showOptions}
                setShowOptions={setShowOptions}
                toggleRef={toggleRef}
                lastItem={(index + 1) % 5 === 0 || (index + 1) % 4 === 0}
            />
        </SectionSliderItemContainer>
    )
}

export default SectionSliderItem