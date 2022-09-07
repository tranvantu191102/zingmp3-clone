import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faMinus, faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { formatDurationSong } from '../../utils/getTime'
import { ArtistsContainer, Artist } from '../NewSong/NewSongItem'
import MusicCardOptions from '../MusicCard/MusicCardOptions'

const MusicCardItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 100%;
    padding: 5px 10px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    border-radius: 10px;

    &:hover {
        background-color: ${props => props.theme.borderColor};
    }
`
const MusicCardLeft = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Ranked = styled.div`
     -webkit-text-stroke: 1px ${props => props.theme.mainColor};
    font-size: 40px;
    font-weight: 900;
    color: transparent;
    line-height: 1;
    font-family: "Roboto",sans-serif;
    padding: 0 10px;
    margin-right: ${props => props.sm ? '28px' : '2px'};
`
const StatusWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;
    padding: 0 10px;
`
const StatusNumber = styled.p`
    font-size: 12px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    color:  ${props => props.theme.mainColor};
`
const InfoContainer = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
`
const Info = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color:  ${props => props.theme.mainColor};
    padding: 0;
    margin:  0;
    margin-bottom: 10px;
`
const ImageWrap = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
`
const ImageMain = styled(Image)`
    border-radius: 4px;
`
const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.4);
    visibility: hidden;
    opacity: 0;

    ${MusicCardItemContainer}:hover & {
        visibility: visible;
    opacity: 100;
    transition: all .2s ease;
    }
`
const IconPlay = styled.div`
     position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 10px;
    color: #fff;
    visibility: hidden;
    opacity: 0;

    ${MusicCardItemContainer}:hover & {
        visibility: visible;
    opacity: 100;
    transition: all .2s ease;
    }
`
const MusicAlbum = styled.div`
    flex: 1;
`
const AlbumText = styled.p`
     font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.secondTextColor};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: ${props => props.theme.hoverColor};
    }
`
const MusicCardDuration = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-end;
   position: relative;
`
const Duration = styled.p`
     font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.secondTextColor};
    position: absolute;
    visibility: visible;
    opacity: 100;

    ${MusicCardItemContainer}:hover & {
        visibility: hidden;
    opacity: 0;
    transition: all .2s ease;
    }
`
const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    visibility: hidden;
    opacity: 0;

    ${MusicCardItemContainer}:hover & {
        visibility: visible;
    opacity: 100;
    transition: all .2s ease;
    }
`
const IconHeart = styled.div`
    width: 30px;
    color: ${props => props.theme.mainColor};
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    &:hover {
        background-color: ${props => props.theme.borderColor};
    }
`
const IconEllips = styled.div`
  width: 30px;
 color: ${props => props.theme.mainColor};
 margin-left: 20px;
 padding: 5px 10px;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    &:hover {
        background-color: ${props => props.theme.borderColor};
    }
`
const TextIcon = styled.div`
      position: absolute;
   visibility: hidden;
   opacity: 0;
    top: -34px;
    right: ${props => props.hover === IconHeart ? '-62px' : '-8px'};
    width:  ${props => props.hover === IconHeart ? '140px' : 'fit-content'};
    padding: 6px 10px;
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    border-radius: 10px;
    z-index: 999;
    font-size: 12px;
    text-align: center;

    &::before{
        position: absolute;
        content: '';
        bottom: -5px;
        right: 50%;
        transform: translateX(-50%);
        border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-top: 8px solid rgba(0,0,0,0.8);
    }

    ${props => props.hover}:hover & {
        visibility: visible;
   opacity: 100;
   transition:visibility .2s ease, opacity .2s ease ;
    }
`

const MusicCardItem = ({ data, stt }) => {
    const [showOptions, setShowOptions] = useState(false)
    const toggleRef = useRef(null)
    const handleShowOption = () => {
        setShowOptions(true)
    }
    return (
        <MusicCardItemContainer>
            <MusicCardLeft>
                <Ranked sm={stt < 10}>
                    {stt}
                </Ranked>
                <InfoContainer>
                    {
                        data.rakingStatus > 0 ?
                            <StatusWrap>
                                <FontAwesomeIcon icon={faCaretUp} style={{ color: '#1dc186', width: '12px' }} />
                                <StatusNumber>{data.rakingStatus}</StatusNumber>
                            </StatusWrap>
                            : data.rakingStatus === 0 ?
                                <StatusWrap>
                                    <StatusNumber>
                                        <FontAwesomeIcon icon={faMinus} style={{ width: '12px' }} />
                                    </StatusNumber>
                                </StatusWrap>
                                :
                                <StatusWrap>
                                    <FontAwesomeIcon icon={faCaretDown} style={{ color: '#e35050', width: '12px' }} />
                                    <StatusNumber>{Math.abs(Number(data.rakingStatus))}</StatusNumber>
                                </StatusWrap>
                    }
                    <Info>
                        <ImageWrap>
                            <ImageMain
                                src={data.thumbnail}
                                width={40}
                                height={40}
                            />
                            <Overlay></Overlay>
                            <IconPlay>
                                <FontAwesomeIcon icon={faPlay} />
                            </IconPlay>
                        </ImageWrap>
                        <div>
                            <Title>{data.title}</Title>
                            <ArtistsContainer>
                                {
                                    data?.artists?.map((el, index) => (
                                        <Link key={index} href={`/artists/${el.id}`}>
                                            <Artist >{`${index > 0 ? ', ' : ''}${el.name}`}</Artist>
                                        </Link>
                                    ))
                                }
                            </ArtistsContainer>
                        </div>
                    </Info>
                </InfoContainer>
            </MusicCardLeft>
            <MusicAlbum>
                <Link href={`/album/${data?.album?.encodeId}`}>
                    <AlbumText>{data?.album?.title}</AlbumText>
                </Link>
            </MusicAlbum>
            <MusicCardDuration>
                <Duration> {formatDurationSong(data.duration)}</Duration>
                <Options>
                    <IconHeart>
                        <FontAwesomeIcon icon={faHeart} />
                        <TextIcon hover={IconHeart}>Thêm vào thư viện</TextIcon>
                    </IconHeart>
                    <IconEllips ref={toggleRef} onClick={handleShowOption}>
                        <FontAwesomeIcon icon={faEllipsis} />
                        <TextIcon hover={IconEllips}>Khác</TextIcon>

                    </IconEllips>

                </Options>
                <MusicCardOptions
                    active={showOptions}
                    setShowOptions={setShowOptions}
                    toggleRef={toggleRef}
                    lastItem={true}
                />
            </MusicCardDuration>
        </MusicCardItemContainer>
    )
}

export default MusicCardItem