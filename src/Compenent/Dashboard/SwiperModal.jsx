import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { GiCancel } from "react-icons/gi";
import { useSetModal } from "../../Context/ModalContext";

export default function SwiperModal() {
  const setModal = useSetModal();

  return (
    <Swiper
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        padding: "40px 0",
        backgroundColor: "rgb(26 26 26)",
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={false}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <GiCancel
        onClick={() => {
          setModal(false);
        }}
        style={{
          fontSize: "25px",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "40px",
          scale: 1.1,
        }}
      />
      <SwiperSlide>
        {({ isActive }) => (
          <div>
            {isActive && (
              <div className="w-11/12 rounded-full overflow-hidden bg-red-700 -translate-x-1/2 h-1.5 top-4 left-1/2 absolute z-50 ">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 400, transition: { duration: 10 } }}
                  className="h-full  bg-orange-600 block"
                ></motion.span>
              </div>
            )}
            <img
              className="h-4/5"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div>
            {isActive && (
              <div className="w-11/12 rounded-full overflow-hidden bg-red-700 -translate-x-1/2 h-1.5 top-4 left-1/2 absolute z-50 ">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 400, transition: { duration: 10 } }}
                  className="h-full  bg-orange-600 block"
                ></motion.span>
              </div>
            )}
            <img
              className="h-4/5"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
