import React from "react";
import { Link } from "react-router-dom";
import Line from "../../../assets/Line49.svg";

export default function HeroSection() {
  return (
    <section className="bg-[#E8F6FF] py-[89px] md:py-[200px]">
      <div className=" max-w-[1350px] px-10 lg:px-[98px]  2xl:px-0  mx-auto flex md:flex-row flex-col justify-center gap-x-10 xl:gap-x-16">
        <div className="relative w-full lg:w-2/4">
          <img className="w-full" src="https://i.ibb.co/KV2CXNv/hero-main.png" alt="" />
          <div className="absolute -top-10 -right-0 md:-right-10">
            <img src="https://i.ibb.co/8YpdQkL/hero-absolute.png" alt="" />
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold my-10 max-w-[400px] tracking-[.5rem] ">
            Elevate Your Business With <span className="bg-gray-300 bg-opacity-14 border-4 border-[#0198FE] px-3 rounded-md inline-block text-[#0198FE]">IT</span>
            Solutions{" "}
          </h1>
          <Link onClick={() => window.scrollTo(0, 0)} to="/getstarted" className="group bg-[#0198FE] text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[36px] flex justify-center gap-2 hover:bg-white hover:text-[#0198FE] hover:ring-2 hover:ring-[#0198FE] duration-300 group">
            get started now
            <span className="transform  inline-block translate-x-0 group-hover:translate-x-2 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="stroke-current">
                <path d="M7.5 17.5L17.5 7.5M17.5 7.5H7.5M17.5 7.5V17.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="hidden lg:block flex-grow self-end justify-self-end">
          <div className="flex flex-col items-centerml-auto">
            <div className=" w-full flex justify-end -ml-3">
              <img src={Line} alt="" />
            </div>

            <div className="w-full [&>*]:flex [&>*]:items-center text-2xl">
              <Link className="flex justify-end w-full my-4" to="https://www.facebook.com/odommo/">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link className="flex justify-end w-full my-4" to="https://www.linkedin.com/company/odommo/">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link className="flex justify-end w-full my-4" to="https://www.instagram.com/odommo/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
