import React from "react";

import BlogDetails from "./BlogDetails";
import BlogLeftSide from "./BlogLeftSide";
import MoreBlog from "./MoreBlog";
import ShareSocial from "./ShareSocial";

const SingleBlog = () => {
  return (
    <div className="flex flex-col mt-32">
      <main className="flex flex-col justify-center">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-10 lg:px-10 2xl:px-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-2"> A Beginner's Guide to Making Money Online Through</h1>
            <p className="text-gray-600">Published on April 4, 2023</p>
          </div>
        </div>
        <article className="max-w-[1650px] mx-auto px-4 sm:px-10 2xl:px-10">
          <div className=" py-8">
            <div className=" flex flex-col md:flex-row gap-5">
              <BlogDetails />
              <BlogLeftSide />
            </div>
            {/* share social media */}
          </div>
          <ShareSocial postTitle="Blog Title Here" postUrl="https://www.google.com" />
        </article>
        {/* comments */}
        {/* <CommentSection /> */}
        <MoreBlog />
      </main>
    </div>
  );
};

export default SingleBlog;
