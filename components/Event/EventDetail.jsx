import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { getTimeEvent } from '../../utils/getTime'

const ArtistLoveItemImageWrap = styled.div`
    width: calc((100vw - 240px)/3.5);
    height:calc((100vw - 240px)/6);
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    @media (max-width: 1024px) {
        width: calc((100vw - 240px)/2);
    height:calc((100vw - 240px)/4);
    }
`
const ArtistLoveItemImage = styled(Image)`
 transition: all .2s ease;
     ${ArtistLoveItemImageWrap}:hover &{
        transform: scale(1.1);
        transition: all .7s ease;
     }
`
const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
`
const Content = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    padding: 0 10px;
`
const ContentLabel = styled.p`
    color: #ff0101;
    padding: 2px 4px;
    border-radius: 2px;
    background-color: #fff;
    text-transform: uppercase;
    font-size: 9px;
    width: fit-content;
`
const ContentName = styled.h3`
    color: #fff;
    padding: 2px 4px;
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    width: fit-content;
`
const ContentTime = styled.p`
    color: #fff;
    padding: 2px 4px;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    width: fit-content;
`
const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
const AvatarWrap = styled.div`
    width: 16px;
    height: 16px;
    border: 1px solid  ${props => props.theme.bgColor};
`
const Avatar = styled(Image)`
    border-radius: 50%;
`
const FollowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ButtonText = styled.p`
    padding: 9px 20px;
    background-color: ${props => props.theme.hoverColor};
    color: ${props => props.theme.bgColor};
    border-radius: 10px;
    cursor: pointer;
    opacity: 100;

    &:hover {
        opacity: 50;
        transition: all .2s ease;
    }
`
const NumberFollowText = styled.div`
    text-transform: capitalize;
    font-size: 14px;
    color: ${props => props.theme.mainColor};
`
const NumberFollow = styled.div`
    font-size: 14px;
    margin-left: 4px;
    color:${props => props.theme.mainColor};
`

const EventDetail = ({ data }) => {
    const numberFollower = (number) => {
        if (number < 1000) return `+${number}`
        return `+${Math.floor(number / 1000)}K`
    }
    return (
        <div>
            <ArtistLoveItemImageWrap>
                <ArtistLoveItemImage
                    src={data.coverHM}
                    layout="fill"
                />
                <Overlay></Overlay>
                <Content>
                    <ContentLabel>{data.label}</ContentLabel>
                    <ContentName className='text-limit-one-line'>{data.shortTitle}</ContentName>
                    <ContentTime>{getTimeEvent(data.startTime)}</ContentTime>
                </Content>
            </ArtistLoveItemImageWrap>
            <FollowContainer>
                <div>
                    <NumberFollowText>{`Lượt ${data.subscribeText} `}</NumberFollowText>
                    <AvatarContainer>
                        {
                            data.followers.map((item, index) => (
                                <AvatarWrap key={index}>
                                    <Avatar
                                        src={item.avatar}
                                        width={16}
                                        height={16}
                                    />
                                </AvatarWrap>
                            ))
                        }
                        <NumberFollow>{numberFollower(data.totalFollow)}</NumberFollow>
                    </AvatarContainer>
                </div>
                <ButtonText>{data.subscribeText}</ButtonText>
            </FollowContainer>
        </div>
    )
}

export default EventDetail