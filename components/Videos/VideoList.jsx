import React, { useState, useEffect } from 'react'
import VideoItem from './VideoItem'
import styled from 'styled-components'
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from 'next/router';

import { getlistMV } from '../../api/api';

const Container = styled.div`
    padding-left: 240px;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 54px;
    margin-top: 20px;
`

const VideoList = ({ data }) => {
    const [listVideos, setListVideos] = useState(data.items)
    const [page, setPage] = useState(1)
    const id = useRouter().query.id

    useEffect(() => {
        setListVideos(data.items)
    }, [data])

    useEffect(() => {
        const getData = async () => {
            const res = await getlistMV(id, page, 20)
            if (res) {
                setListVideos(listVideos?.concat(res.items))
            }
        }

        getData()
    }, [page])
    return (
        <Container>
            <InfiniteScroll
                dataLength={listVideos?.length || 0}
                next={() => setPage(prev => prev + 1)}
                hasMore={true}
            >
                <Menu>
                    {
                        listVideos?.map((video, index) => (
                            <VideoItem key={index} video={video}></VideoItem>
                        ))
                    }
                </Menu>
            </InfiniteScroll>
        </Container>
    )
}

export default VideoList