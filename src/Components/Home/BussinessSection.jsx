import React from "react";
import { Link } from "react-router-dom";

export default function BussinessSection() {
  return (
    <section>
      <div className="max-w-[1350px] py-10 px-10 2xl:px-0 mx-auto flex flex-col md:flex-row justify-between items-center gap-24">
        <div className="space-y-10 my-10 md:my-0 md:w-5/6">
          <h1 className="text-4xl font-bold">Business & IT Solutions In Bangladesh</h1>
          <p>Welcome to Odommo XYZ! A growing digital agency founded in 2020. We are a specialized web development, Android app development, graphics design, business solutions, digital marketing, UI/UX designing, and data analysis service provider in Bangladesh. Our team of experts is dedicated to helping your businesses establish a strong online presence and achieve your growth goals. With our use of the latest technologies and knowledge of recent business trends,</p>
          <p>We believe in the power of technology and innovation to drive business success. With years of experience in the industry, our team of skilled professionals is committed to delivering high-quality services that exceed our client`s expectations. We understand that each business</p>
          <div className="my-10">
            <Link onClick={() => window.scrollTo(0, 0)} to="/#" className="group bg-[#0198FE] text-white px-8  py-4 rounded-[36px] font-medium">
              Read More
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 [&>div>img]:rounded-xl">
            <div className="w-full ">
              <img className="w-full" src="https://i.ibb.co/f8KnF7T/1.png" alt="" />
            </div>
            <div className="w-full ">
              <img className="w-full" src="https://i.ibb.co/sq0g3Z6/2.png" alt="" />
            </div>
            <div className="w-full ">
              <img className="w-full" src="https://i.ibb.co/4NFRB3c/3.png" alt="" />
            </div>
            <div className="w-full ">
              <img className="w-full" src="https://i.ibb.co/2cV7qbz/4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
