import React, { useState } from 'react'
import styled from 'styled-components'

import MusicCard from './MusicCard'

const NewReleaseContainer = styled.div`
    padding: 0 54px;
`
const Title = styled.h2`
    margin-top: 26px;
    margin-bottom: 16px;
    color: ${props => props.theme.mainColor};
    font-size: 20px;
    font-weight: 700;
`
const NewReleaseHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ButtonSong = styled.button`
    padding: 6px 24px;
    border: 1px solid  ${props => props.theme.hoverColor};
    border-radius: 10px;
    background-color: ${props => props.active ? props.theme.hoverColor : 'transparent'};
    color: ${props => props.active ? '#fff' : props.theme.hoverColor};
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 20px;
`
const SeeAll = styled.div`
    font-size: 13px;
    text-transform: uppercase;
    padding: 10px;
    cursor: pointer;
    color: ${props => props.theme.mainColor};
    &:hover {
        color: ${props => props.theme.hoverColor};
    }

`
const NewReleaseContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const NewRelease = ({ data }) => {
    const [songs, setSongs] = useState({
        index: 0,
        data: data.items[0].song
    })
    return (
        <NewReleaseContainer>
            <Title>{data.title}</Title>
            <NewReleaseHeader>
                <div style={{ width: '80%' }}>
                    <ButtonSong active={songs.index === 0} onClick={() => setSongs({
                        index: 0,
                        data: data.items[0].song
                    })}>bài hát</ButtonSong>
                    <ButtonSong onClick={() => setSongs({
                        index: 1,
                        data: data.items[0].album
                    })} active={songs.index === 1}>ablum</ButtonSong>
                </div>
                <SeeAll>
                    Tất cả
                </SeeAll>
            </NewReleaseHeader>
            <NewReleaseContent>
                {
                    songs.data.slice(0, 12).map((item, index) => (
                        <MusicCard music={item} key={index} lastItem={(index + 1) % 3 === 0} />
                    ))
                }
            </NewReleaseContent>
        </NewReleaseContainer>
    )
}

export default NewRelease