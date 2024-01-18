// swiper.d.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'swiper/react' {
  import { SwiperOptions } from 'swiper';

  interface SwiperProps extends SwiperOptions {
    className?: string;
    children?: React.ReactNode;
    effect?: string;
    centeredSlides?: boolean;
    slidesPerView?: string;
    coverflowEffect?: any;
    pagination?: any;
    modules?: any;
    initialSlide?: number
  }

  interface SwiperSlideProps {
    key?: number;
    virtualIndex?: number;
    children?: React.ReactNode;
  }

  const Swiper: React.FC<SwiperProps>;
  const SwiperSlide: React.FC<SwiperSlideProps>;

  export { Swiper, SwiperSlide };
}
