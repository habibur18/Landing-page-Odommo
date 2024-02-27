import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../../assets/Arrow.svg";
import star from "../../../../assets/star.svg";
const SingleServiceLeft = () => {
  const title = "Publish your passions, your way - Create a unique and beautiful blog easily.";
  return (
    <div className="space-y-[26px]  w-full h-full xl:w-[calc(100%-340px)] px-4 sticky top-0 lg:flex-[0_0_340px] xl:flex-[0_0_382px] lg:max-w-full mt-8">
      {/* search bar */}
      <div className="relative">
        <input className="w-full text-[#737373] border-2 border-[#737373]/50 px-[24px] py-[13px] rounded-[36px] shadow-md outline-none focus:ring-2 focus:ring-[#0198FE] duration-300" type="search" placeholder="Search here..." />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 px-[24px] py-[12px] bg-[#0198FE] text-white rounded-[36px] w-[80px] text-center text-2xl">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {/* categories */}
      <div className="border-2 border-[#737373]/50 p-4 mt-4 rounded-[36px] shadow-md">
        <h2 className="text-[32px] font-semibold text-gray-800 mb-4">Main Services</h2>
        <ul className="list-none">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="mb-2 text-[20px] font-semibold border border-gray-300">
              <Link to="#" className="group px-4 py-2 rounded-lg text-gray-700 hover:text-[#0198FE] hover:bg-gray-200 transition duration-300 capitalize flex items-center justify-between">
                <span>
                  <img className="block w-8 h-8 p-2" src={star} alt="" />
                </span>{" "}
                <span className="">Category 1</span>{" "}
                <span>
                  <img className="block w-8 border-2 border-gray-300 h-8 p-2 rounded-full" src={arrow} alt="" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div className="bg-[#0198FE] p-[49px] mt-4 rounded-[36px]">
        <figure className="border-4 mb-3 rounded-full size-[75px] flex justify-center items-center mx-auto">
          <img className="max-w-[100px]  size-[40px] mx-auto" src="https://i.ibb.co/qBshbmv/0e9e0c1b66ea34f75640f7e5471644af.png" alt="" />
        </figure>
        <p className="text-center text-white">24/7 Emergency Service</p>
        <p className="text-center text-white text-[32px] font-bold">019234234234</p>
        <p className="text-center text-white text-[24px] font-medium">support@odommo.xyz</p>
      </div>
    </div>
  );
};

export default SingleServiceLeft;
