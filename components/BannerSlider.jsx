import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import styled from 'styled-components'


const ImageContainer = styled.div`
    width: 100%;
    height: 180px;
    @media (max-width: 1024px) {
        height: 160px;
    }
`
const ImageItem = styled(Image)`
     border-radius: 10px;
`
const BannerSliderContainer = styled.div`
    padding: 20px 50px 0 50px;
    @media (max-width: 1024px) {
        padding: 20px 20px 0 20px;
    }
`

const BannerSlider = ({ data }) => {
    SwiperCore.use([Autoplay]);

    return (
        <BannerSliderContainer>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
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
                        <Link href={item.link}>
                            <ImageContainer>
                                <ImageItem
                                    src={item.banner}
                                    layout='fill'
                                />
                            </ImageContainer>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </BannerSliderContainer>
    )
}

export default BannerSlider