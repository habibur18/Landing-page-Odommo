import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tags from "./Tags";

const BlogLeftSide = () => {
  const title = "Publish your passions, your way - Create a unique and beautiful blog easily.";
  return (
    <div className="space-y-5 w-full h-full xl:w-[calc(100%-340px)] px-4 sticky top-0 xl:flex-[0_0_340px] md:max-w-[300px] lg:max-w-full">
      {/* categories */}
      <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Categories</h2>
        <ul className="list-none">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="mb-2 text-xl font-bold">
              <Link to="#" className="group px-4 py-2 rounded-lg text-gray-700 hover:text-[#0198FE] hover:bg-gray-200 transition duration-300 capitalize flex items-center justify-between">
                <span>
                  {/* <img className="block w-10 h-10 p-2" src={star} alt="" /> */}
                  <FaStar className="block w-10 h-10 p-2 group-hover:text-yellow-500" />
                </span>{" "}
                <span>Category 1</span>{" "}
                <span>
                  {/* <img className="block w-10 border-2 border-gray-300 h-10 p-2 rounded-full" src={arrow} alt="" /> */}
                  <FaArrowRight className="block w-10 border-2 border-gray-300 h-10 p-2 rounded-full group-hover:translate-x-2 transition duration-300" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* recent post */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
        <ul className="list-none">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="mb-2">
              <Link href="#" className=" text-gray-500 hover:text-[#0198FE] underline">
                {title.slice(0, 50)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* tags */}
      <Tags tags={["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]} />
      {/* Support */}
      <div className="bg-[#0198FE] p-4 mt-4 space-y-3 rounded-md">
        <figure>
          <img className="max-w-[100px] mx-auto" src="https://i.ibb.co/qBshbmv/0e9e0c1b66ea34f75640f7e5471644af.png" alt="" />
        </figure>
        <p className="text-center text-white">24/7 Emergency Service</p>
        <p className="text-center text-white">019234234234</p>
        <p className="text-center text-white">support@odommo.xyz</p>
      </div>
    </div>
  );
};

export default BlogLeftSide;
