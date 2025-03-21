import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MyContext } from '../App/App';

export default function Slider() {
    const { slider } = useContext(MyContext);

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {slider?.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.image} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
