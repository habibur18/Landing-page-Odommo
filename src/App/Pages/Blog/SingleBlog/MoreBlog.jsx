import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MoreBlog = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blog/single-blog");
  };
  const title = "The Coldest Sunset Ever The Coldest Sunset Ever The Coldest Sunset Ever";
  const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";
  return (
    <main className="w-7xl mx-auto px-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold my-5">More Blog</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center flex-wrap gap-5 mx-auto">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex px-3 py-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img onClick={handleClick} className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <Link to="#" className="font-bold block text-xl mb-2">
                  {title.slice(0, 50).replace(/\s+$/, "") + "..."}
                </Link>
                <p className="text-gray-700 text-base">{desc.slice(0, 150).replace(/\s+$/, "") + "..."}</p>
              </div>
              <div className="px-6 py-4 space-y-3">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MoreBlog;
