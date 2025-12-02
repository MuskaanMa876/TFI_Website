import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function WorkspaceCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      loop={true}
      className="w-full h-full"
    >
      {/* IMAGE 1 (workspace) */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          className="w-full h-full object-cover rounded-2xl"
        />
      </SwiperSlide>

      {/* IMAGE 2 (workspace C) */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          className="w-full h-full object-cover rounded-2xl"
        />
      </SwiperSlide>

      {/* IMAGE 3 (workspace C) */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          className="w-full h-full object-cover rounded-2xl"
        />
      </SwiperSlide>

      {/* IMAGE 4 — Learning Image A */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
          className="w-full h-full object-cover rounded-2xl"
        />
      </SwiperSlide>

      {/* IMAGE 5 — Learning Image B */}
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          className="w-full h-full object-cover rounded-2xl"
        />
      </SwiperSlide>
    </Swiper>
  );
}
