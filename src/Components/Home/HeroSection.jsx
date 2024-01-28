import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-[#E8F6FF] my-5 py-32">
      <div className=" container mx-auto flex md:flex-row flex-col justify-center gap-x-20">
        <div className="relative xl:3/4">
          <img className="w-full" src="https://i.ibb.co/KV2CXNv/hero-main.png" alt="" />
          <div className="absolute -top-10 -right-0 md:-right-10">
            <img src="https://i.ibb.co/8YpdQkL/hero-absolute.png" alt="" />
          </div>
        </div>
        <div className="space-y-5 lg:w-1/3">
          <h1 className="text-6xl font-bold my-10 max-w-[400px] tracking-[.2rem] lg:leading-[80px]">
            Elevate Your Business With <span className="bg-gray-300 bg-opacity-14 border-4 border-[#0198FE] px-3 rounded-md inline-block text-[#0198FE]">IT</span>
            Solutions{" "}
          </h1>
          <Link onClick={() => window.scrollTo(0, 0)} to="/getstarted" className="group uppercase bg-[#0198FE] text-white px-5 py-4 rounded-[36px] font-medium">
            get started now<span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
          </Link>
        </div>
        <div className="hidden xl:flex flex-col items-center space-y-5 absolute top-[50%] right-[0%] [transform:translateY(-50%)] text-2xl">
          <div className="border-t-4 transform rotate-90 border-black w-52  mb-32"></div>

          <div className="[&>*]:flex [&>*]:items-center text-4xl space-y-2">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
