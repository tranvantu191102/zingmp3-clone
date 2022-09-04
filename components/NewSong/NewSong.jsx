import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import {
    SectionSliderContainer,
    SectionSliderTitle,

} from '../SectionSlider/SectionSlider'
import NewSongItem from './NewSongItem';

const NewSong = ({ data }) => {
    console.log(data)
    SwiperCore.use([Autoplay]);
    return (
        <SectionSliderContainer>
            <SectionSliderTitle>{data.title}</SectionSliderTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                // autoplay={{ delay: 2000 }}
                className="mySwiper"
            >
                {data.items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <NewSongItem data={item} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionSliderContainer>
    )
}

export default NewSong