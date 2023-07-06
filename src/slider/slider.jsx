import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper — компонент-обёртка слайдера, в него и будем вкладывать слайды
// SwiperSlide — компонент-обёртка для слайда, каждый слайд нужно оборачивать в этот компонент
import "swiper/swiper.scss";
// стили для слайдера
import SwiperCore, { Navigation } from "swiper";
// SwiperCore — это ядро слайдера. С его помощью к слайдеру можно подключать различные модули, например, Navigation
// для навигации
import { Image } from "/src/elements";
import { StyledSider, StyledButton, SlyderWrapper } from "./styled";

function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SlyderWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>

      <StyledSider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"
                width="200"
                height="257"
                maxWidth="200"
              />
            </SwiperSlide>
          ))}
      </StyledSider>
    </SlyderWrapper>
  );
}

export default Slider;
