import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, FreeMode, Thumbs } from "swiper";
import Image from "../Image";
import ImageIcon, { ICONS } from "../ImageIcon";
import CardPrimary from "../CardPrimary";

const arrowStyle =
  "absolute text-2xl z-10 h-9 w-9 rounded-full opacity-75 flex items-center justify-center hover:scale-125 transition-all duration-150 ease-in";

const SwiperImages = ({ images = [] }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [indexActive, setIndexActive] = useState(0);

  const isCurrentSlider = (index) => {
    return Boolean(indexActive === index);
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        loop={false}
        lazy
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation, Thumbs]}
        className="cursor-pointer relative"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={({ activeIndex }) => {
          console.log("1", activeIndex);
          setIndexActive(activeIndex);
        }}
        defaultValue={0}
      >
        {images?.length > 0 &&
          images.map((item, i) => (
            <SwiperSlide key={i} className="select-none">
              <Image
                className="w-full object-contain h-80"
                src={item}
                alt={item}
              />
            </SwiperSlide>
          ))}

        <div ref={navigationPrevRef}>
          <button
            type="button"
            className={`${arrowStyle} left-2`}
            style={{ top: "50%" }}
          >
            <span role="img" aria-label={`Arrow left`}>
              <ImageIcon nameIcon={ICONS.arrowSwiperLeft} />
            </span>
          </button>
        </div>
        <div ref={navigationNextRef}>
          <button
            type="button"
            className={`${arrowStyle} right-2`}
            style={{ top: "50%" }}
          >
            <span role="img" aria-label={`Arrow right`}>
              <ImageIcon
                className="transform rotate-180"
                nameIcon={ICONS.arrowSwiperLeft}
              />
            </span>
          </button>
        </div>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        lazy
        slidesPerView={7}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-7"
      >
        {images?.length > 0 &&
          images.map((item, i) => (
            <SwiperSlide key={i} className="select-none">
              <CardPrimary borderActive={isCurrentSlider(i)}>
                <Image className={`w-full h-full`} src={item} alt={item} />
              </CardPrimary>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperImages;
