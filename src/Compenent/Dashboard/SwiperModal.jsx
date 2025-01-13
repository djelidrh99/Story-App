import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

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
import { useSetModal } from "../../Context/ModalContext";
import { useRef, useState } from "react";

export default function SwiperModal() {
  const setModal = useSetModal();
  // @ts-ignore
  const file = useSelector((state) => state.story);
  const [isAutoPlay, setIsAutoPlay] = useState(file && file.map(() => true));
  const swipeRef = useRef();
  const [currentWisth, setCurrentWidth] = useState("0%");

  const autoplayStop = (i) => {
    // @ts-ignore
    if (swipeRef.current && swipeRef.current.autoplay) {
      if (isAutoPlay[i]) {
        // @ts-ignore
        swipeRef.current.autoplay.stop();
      } else {
        // @ts-ignore
        swipeRef.current.autoplay.start();
      }
      setIsAutoPlay((prev) =>
        prev.map((autoplay, index) => (i === index ? !autoplay : true))
      );
    }
  };

  return (
    <Swiper
      // @ts-ignore
      onSwiper={(swiper) => {
        // @ts-ignore
        return (swipeRef.current = swiper);
      }}
      onSlideChange={() => {
        setIsAutoPlay((prev) => prev.map(() => true));
        console.log("changed");
      }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        padding: "40px 0",
        backgroundColor: "rgb(61 58 58)",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
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
      <LuX
        onClick={() => {
          setModal(false);
        }}
        style={{
          fontSize: "25px",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          top: "2%",
          right: "4%",
          scale: 1.1,
        }}
      />

      {file.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div>
                {isActive && (
                  <div className="w-11/12 rounded-full overflow-hidden bg-gray-300 -translate-x-1/2 h-1.5 top-4 left-1/2 absolute z-50 ">
                    <motion.span
                      initial={{ width: "0%" }}
                      animate={{
                        width: isAutoPlay[index] ? "100%" : currentWisth,
                      }}
                      transition={{ duration: 3 }}
                      onUpdate={(latest) => {
                        // @ts-ignore
                        setCurrentWidth(latest.width);
                      }}
                      className="h-full  bg-gray-600 block"
                    ></motion.span>
                  </div>
                )}
                {isActive && isAutoPlay[index] ? (
                  <FaPause
                    onClick={() => {
                      autoplayStop(index);
                    }}
                    className="absolute top-10 right-6 cursor-pointer text-white"
                  />
                ) : (
                  <FaPlay
                    onClick={() => {
                      autoplayStop(index);
                    }}
                    className="absolute top-10 right-6 cursor-pointer text-white"
                  />
                )}

                <img className="h-96 w-96" src={item.story} />
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
