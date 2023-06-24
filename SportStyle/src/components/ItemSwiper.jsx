import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Item from './Item';
import SwiperCore, { Autoplay } from 'swiper';

export default function ItemSwiper({ data }) {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      loop={true}
    >
      {data.map( item => {
        return(
            <SwiperSlide
              key={`swiper.${item.id}`}> 
              <Item
                key={item.id}
                id={item.id}
                img={`http://127.0.0.1:8000/storage/${item.image}`}
                name={item.name}
                price={item.price}
                category={item.category}>
              </Item>  
            </SwiperSlide>
        )
    })}
    </Swiper>
  )
}
