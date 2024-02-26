import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";

const Portfolio = () => {
  return (
    <section className="mt-[141px] pb-[241px]">
      <div className="max-w-[1350px] px-10 lg:px-[110px] 2xl:px-0 mx-auto">
        <div className="text-4xl mb-20 font-bold text-center">
          <h1>Our Team Member</h1>
        </div>
        <div className="relative">
          <Swiper cssMode={true} navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }} modules={[Navigation]} className="mySwiper" style={{ overflow: "visible" }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
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
            ))}
          </Swiper>
          <div style={{ zIndex: 100 }} className="absolute -bottom-20 left-1/2 -translate-x-1/2  ">
            <button style={{ color: "white", backgroundColor: "#0198FE", zIndex: 200 }} className=" swiper-button-prev border px-8 py-5">
              <i className="fa-solid fa-arrow-right flex border h-full w-full justify-center items-center "></i>
            </button>
            <button style={{ color: "#3B82F6", backgroundColor: "#FFFFFF" }} className=" swiper-button-next px-8 py-5">
              <i className="fa-solid fa-arrow-left flex border h-full w-full justify-center items-center"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
