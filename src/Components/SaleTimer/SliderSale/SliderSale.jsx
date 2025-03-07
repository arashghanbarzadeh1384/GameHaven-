import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import { MyContext } from "../../App/App";
import producSaletStyle from "./SliderSale.module.scss";
export default function SliderSale() {
  const { productSale } = useContext(MyContext);
  return (
    <div className={producSaletStyle.sliderSale}>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation
        modules={[Navigation]}
        className="mySwiper">
        {productSale?.map(item => (
          <SwiperSlide key={item.id}>
            <div className={producSaletStyle.card__products}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <span>{item.price} تومان </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
