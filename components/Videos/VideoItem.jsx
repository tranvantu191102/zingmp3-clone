import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

import { formatDurationSong } from '../../utils/getTime'
import { ArtistsContainer, Artist } from '../NewSong/NewSongItem'

const Container = styled.div`
    margin-bottom: 30px;
    width: 30%;
`
const ImageWrap = styled.div`
    position: relative;
    width: calc((100vw - 240px)/3.5);
    height:calc((100vw - 240px)/6);
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
`
const ImageVideo = styled(Image)`
     border-radius: 10px;
     transition: all .5s ease;
     ${ImageWrap}:hover & {
        transform: scale(1.1);
        transition: all .5s ease;
    }
`
const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.5);
    visibility: hidden;
    opacity: 0;
    border-radius: 10px;

    ${ImageWrap}:hover & {
        visibility: visible;
        opacity: 100;
        transition: all .4s ease;
    }
`
const IconPlay = styled.div`
     position: absolute;
     width: 40px;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%,-50%);
    visibility: hidden;
    opacity: 0;

    ${ImageWrap}:hover & {
        visibility: visible;
        opacity: 100;
        transition: all .4s ease;
    }
`
const Duration = styled.p`
    position: absolute;
    bottom: 2px;
    right: 10px;
    padding: 2px 6px;
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
`
const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const ImageAvatar = styled(Image)`
      border-radius: 50%;
`
const InfoContent = styled.div`
    margin-left: 10px;
`
const Name = styled.p`
    color: ${props => props.theme.mainColor};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    margin: 4px 0;

    &:hover {
        color: ${props => props.theme.activeColor};
    }
`

const VideoItem = ({ video }) => {
    return (
        <Container>
            <ImageWrap>
                <ImageVideo
                    src={video.thumbnailM}
                    layout="fill"
                />
                <Overlay></Overlay>
                <IconPlay>
                    <FontAwesomeIcon icon={faPlayCircle} />
                </IconPlay>
                <Duration>{formatDurationSong(Number(video.duration))}</Duration>
            </ImageWrap>
            <Info>
                <Avatar>
                    <ImageAvatar
                        src={video.artist.thumbnail}
                        width={40}
                        height={40}
                    />
                </Avatar>
                <InfoContent>
                    <Name>{video.title}</Name>
                    <ArtistsContainer>
                        {
                            video.artists.map((item, index) => (
                                <Link key={index} href={`/artists/${item.id}`}>
                                    <Artist >{`${item.name}${index + 1 < video.artists.length ? ', ' : ''}`}</Artist>
                                </Link>
                            ))
                        }
                    </ArtistsContainer>
                </InfoContent>
            </Info>
        </Container>
    )
}

export default VideoItem