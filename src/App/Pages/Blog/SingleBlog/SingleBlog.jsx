import React from "react";

import PageTitle from "../../../../ReuseableComponents/PageTitle";
import BlogDetails from "./BlogDetails";
import BlogLeftSide from "./BlogLeftSide";

const SingleBlog = () => {
  return (
    <div className="flex flex-col mt-32">
      <PageTitle title="Blog Details" src="https://i.postimg.cc/2y2tT5kK/blog.png" />
      <main className="flex flex-col justify-center">
        <div className="bg-gray-100 py-8 px-10">
          <div className="container mx-auto px-4 lg:px-10 2xl:px-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-2"> A Beginner's Guide to Making Money Online Through</h1>
            <p className="text-gray-600">Published on April 4, 2023</p>
          </div>
        </div>
        <article className="max-w-[1650px] mx-auto px-4 sm:px-10 2xl:px-10">
          <div className=" py-8">
            <figure className="mb-10 relative border" style={{ height: "70vh" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-full h-full max-w-full max-h-full object-cover rounded-md" src="https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg?cs=srgb&dl=pexels-james-wheeler-3774243.jpg&fm=jpg" alt="Blog Featured Image" />
              </div>
            </figure>

            <div className=" flex flex-col md:flex-row gap-5">
              <BlogDetails />
              <BlogLeftSide />
            </div>
            {/* share social media */}
          </div>
        </article>
      </main>
    </div>
  );
};

export default SingleBlog;
