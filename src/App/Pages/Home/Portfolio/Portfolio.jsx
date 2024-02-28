import React, { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  const [activeButton, setActiveButton] = useState("next");

  return (
    <section className="pb-[130px]">
      <div className="max-w-[1350px] px-10 lg:px-[110px] 2xl:px-0 mx-auto">
        <div className="mb-20 flex">
          <h1 className="text-4xl font-bold w-full">
            <p className="lg:max-w-[12ch]">Explore Our Recent Works</p>
          </h1>
          <p className="w-full lg:max-w-[63ch] text-justify">We value the experimentation, the reformation of the message, and the smart incentives. We offer a variety of services and solutions Worldwide and this is at the heart of how we approach our.</p>
        </div>
        <div className="relative">
          <Swiper cssMode={true} loop={true} navigation={{ nextEl: ".swiper-portfolio-button-next", prevEl: ".swiper-portfolio-button-prev" }} modules={[Navigation, Pagination]} className="mySwiper" style={{ overflow: "visible" }}>
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10">
                {Array.from({ length: 4 }).map((_, index) => (
                  <article key={index} className="pt-[15px] pb-[26px] px-[18px] bg-[#262627] rounded-[6px]">
                    <div>
                      <h3 style={{ fontFamily: "Rowdies" }} className="mb-[10px] text-[28px] font-normal text-[#FCFCFC]">
                        Educare
                      </h3>
                      <figure className="w-full relative group">
                        <img className="w-full" src="https://i.ibb.co/0FBngWm/74c56f5da66e1886ff040efc13684871.png" alt="" />
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 size-[122px] bg-[#0198FE] rounded-full flex justify-center items-center font-medium text-[#FFFFFF] scale-0 group-hover:scale-100 duration-300 ">
                          <Link to="/portfolio-details">See Details</Link>
                        </div>
                      </figure>
                      <div className="flex items-center gap-[12px] mt-[21px]">
                        <button className="border border-[#F78723] py-[6px] px-[22px] rounded-[16px] text-[#EFF2F2]">SEO</button>
                        <button className="border border-[#F78723] py-[6px] px-[22px] rounded-[16px] text-[#EFF2F2] ">Online Education</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10">
                {Array.from({ length: 4 }).map((_, index) => (
                  <article key={index} className="pt-[15px] pb-[26px] px-[18px] bg-[#262627] rounded-[6px]">
                    <div>
                      <h3 style={{ fontFamily: "Rowdies" }} className="mb-[10px] text-[28px] font-normal text-[#FCFCFC]">
                        Educare 1
                      </h3>
                      <figure className="w-full relative group">
                        <img className="w-full" src="https://i.ibb.co/0FBngWm/74c56f5da66e1886ff040efc13684871.png" alt="" />
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 size-[122px] bg-[#0198FE] rounded-full flex justify-center items-center font-medium text-[#FFFFFF] scale-0 group-hover:scale-100 duration-300 ">
                          <Link to="/portfolio-details">See Details</Link>
                        </div>
                      </figure>
                      <div className="flex items-center gap-[12px] mt-[21px]">
                        <button className="border border-[#F78723] py-[6px] px-[22px] rounded-[16px] text-[#EFF2F2]">SEO</button>
                        <button className="border border-[#F78723] py-[6px] px-[22px] rounded-[16px] text-[#EFF2F2] ">Online Education</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
          <div style={{ zIndex: 100 }} className="absolute -bottom-24 left-1/2 -translate-x-1/2">
            <button style={{ color: activeButton === "prev" ? "#FFFFFF" : "#0198FE", backgroundColor: activeButton === "prev" ? "#0198FE" : "#FFFFFF", zIndex: 200 }} className="swiper-portfolio-button-prev border px-8 py-5" onClick={() => setActiveButton("prev")}>
              <i className="fa-solid fa-arrow-left flex  h-full w-full justify-center items-center"></i>
            </button>
            <button style={{ color: activeButton === "next" ? "#FFFFFF" : "#3B82F6", backgroundColor: activeButton === "next" ? "#0198FE" : "#FFFFFF" }} className="swiper-portfolio-button-next px-8 py-5 ml-7" onClick={() => setActiveButton("next")}>
              <i className="fa-solid fa-arrow-right flex h-full w-full justify-center items-center "></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
