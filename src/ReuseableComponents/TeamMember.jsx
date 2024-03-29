import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

export default function TeamMember() {
  const [activeButton, setActiveButton] = useState("next");
  return (
    <section className="bg-[#F5F5F5] py-24 mt-28">
      <div className="max-w-[1350px] px-10 lg:px-[110px] 2xl:px-0 mx-auto">
        <div className="text-4xl mb-20 font-bold text-center">
          <h1>Our Team Member</h1>
        </div>
        <div className="relative">
          <Swiper cssMode={true} loop={true} navigation={{ nextEl: ".swiper-team-button-next", prevEl: ".swiper-team-button-prev" }} modules={[Navigation]} className="mySwiper" style={{ overflow: "visible" }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16">
                  <div className="flex gap-5 items-center">
                    <div className="w-2/3">
                      <img className="w-full rounded-md" src="https://i.ibb.co/zSjtjjh/1.png" alt="" />
                    </div>
                    <div className="w-full">
                      <div className="text-white space-x-5 flex items-center my-3">
                        <i className="fa-brands fa-facebook-f bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-linkedin-in bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-instagram bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                      </div>

                      <h4 className="text-2xl font-semibold">Jenifar Nishi</h4>
                      <p className="text-[#3B82F6]">Ui Ux Designer</p>
                      <p>Lead the team of passionate developers, designers and the strategists with a thought.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-2/3">
                      <img className="w-full rounded-md" src="https://i.ibb.co/h8bwrCK/2.png" alt="" />
                    </div>
                    <div className="w-full">
                      <div className="text-white space-x-5 flex items-center my-3">
                        <i className="fa-brands fa-facebook-f bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-linkedin-in bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-instagram bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                      </div>

                      <h4 className="text-2xl font-semibold">Sheikh Md.Nazmul Hasan</h4>
                      <p className="text-[#3B82F6]">Developer</p>
                      <p>Lead the team of passionate developers, designers and the strategists with a thought.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-2/3">
                      <img className="w-full rounded-md" src="https://i.ibb.co/Y0SRSqX/3.png" alt="" />
                    </div>
                    <div className="w-full">
                      <div className="text-white space-x-5 flex items-center my-3">
                        <i className="fa-brands fa-facebook-f bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-linkedin-in bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-instagram bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                      </div>

                      <h4 className="text-2xl font-semibold">Md. Ariful Islam</h4>
                      <p className="text-[#3B82F6]">Marketing</p>
                      <p>Lead the team of passionate developers, designers and the strategists with a thought. </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-2/3">
                      <img className="w-full rounded-md" src="https://i.ibb.co/Y0SRSqX/3.png" alt="" />
                    </div>
                    <div className="w-full">
                      <div className="text-white space-x-5 flex items-center my-3">
                        <i className="fa-brands fa-facebook-f bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-linkedin-in bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                        <i className="fa-brands fa-instagram bg-[#3B82F6] w-10 h-10 rounded-full text-xl flex justify-center items-center"></i>
                      </div>

                      <h4 className="text-2xl font-semibold">Md.Jahidul Islam Sheikh</h4>
                      <p className="text-[#3B82F6]">CEO</p>
                      <p>Lead the team of passionate developers, designers and the strategists with a thought. </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div style={{ zIndex: 100 }} className="absolute -top-20 right-24">
            <button style={{ color: activeButton === "prev" ? "#FFFFFF" : "#0198FE", backgroundColor: activeButton === "prev" ? "#0198FE" : "#FFFFFF" }} className="swiper-team-button-prev px-8 py-5" onClick={() => setActiveButton("prev")}>
              <i className="fa-solid fa-arrow-left flex h-full w-full justify-center items-center"></i>
            </button>
            <button style={{ color: activeButton === "next" ? "#FFFFFF" : "#3B82F6", backgroundColor: activeButton === "next" ? "#0198FE" : "#FFFFFF" }} className="swiper-team-button-next px-8 py-5 ml-7" onClick={() => setActiveButton("next")}>
              <i className="fa-solid fa-arrow-right flex h-full w-full justify-center items-center"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
