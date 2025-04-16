import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { projectItems } from "./constantProject";

const SwiperProject = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className="relative">
      {navigationReady && (
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {projectItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-10">
                <div className="border-[5px] border-white overflow-hidden cursor-pointer">
                  <img
                    className="w-full transition-transform duration-500 hover:scale-105"
                    src={item.img}
                    alt={item.description}
                  />
                </div>
                <div>
                  <p className="text-[17px] md:text-[14px] lg:text-[17px] xl:text-[18px] mb-[8px] line-clamp-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 group w-[230px]">
                    <a
                      className="text-[24px] lg:text-[28px] xl:text-[30px] underline underline-offset-6 cursor-pointer"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                    <span className="mt-[20px]">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                      >
                        <path
                          d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <button
        ref={prevRef}
        className="hidden lg:flex justify-center items-center custom-prev absolute top-[60%] xl:left-[18px] lg:left-[10px] bg-[#ffffff58]  hover:bg-[#fff] -translate-y-[200%] w-[60px] h-[60px] z-10 p-3 rounded-full rotate-180 cursor-pointer xl:border-1 transition-all duration-200 group"
      >
        <img
          className="group-hover:translate-x-1 transition-transform duration-200"
          src="icons/next.svg"
          alt=""
        />
      </button>

      <button
        ref={nextRef}
        className="hidden lg:flex justify-center items-center custom-next absolute top-[60%]  lg:right-[10px]  bg-[#ffffff58]  hover:bg-[#fff] -translate-y-[200%] w-[60px] h-[60px] z-10 p-3  rounded-full cursor-pointer xl:border-1 transition-all duration-200 group"
      >
        <img
          className="group-hover:translate-x-1 transition-transform duration-200"
          src="icons/next.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default SwiperProject;
