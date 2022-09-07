import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import {
    SectionSliderContainer,
    SectionSliderTitle,

} from '../SectionSlider/SectionSlider'
import NewSongItem from './NewSongItem';

const NewSong = ({ data }) => {
    SwiperCore.use([Autoplay]);
    return (
        <SectionSliderContainer>
            <SectionSliderTitle>{data.title}</SectionSliderTitle>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                // autoplay={{ delay: 2000 }}
                className="mySwiper"
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        // spaceBetween: 10
                    }
                }}
            >
                {data.items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <NewSongItem data={item} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionSliderContainer >
    )
}

export default NewSong