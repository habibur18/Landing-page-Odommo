import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../ReuseableComponents/PageTitle";

const Blog = () => {
  const desc = "During the month of February, the American Dental Association celebrates National Children’s Dental Health Month. This month-long national health observance reinforces the importance of oral health in children as well as helping parents with tips to keep their child’s smile on track! At Children’s Dental hostpital";
  // total character of desc
  const totalChar = desc.length;
  return (
    <div className="pt-[75px]">
      <PageTitle title="Blog" src="https://i.postimg.cc/Y9T9bzgX/contactus.png" />
      <main className="max-w-[1350px] px-10 2xl:px-0 mx-auto">
        <div className="text-center my-20">
          <h6 className="font-semibold text-[#6B9B7B]">Blogs</h6>
          <h1 className="text-4xl font-bold">Our Latest Blogs</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-16">
          {Array.from({ length: 6 }).map((_, index) => (
            <article key={index} className="space-y-5 max-w-[624px] mx-auto">
              <figure>
                <img src="https://i.ibb.co/nkWp8gZ/Image.png" className="rounded-lg" alt="" />
              </figure>
              <h3 className="text-2xl font-bold">Regional Manager & Limited time management.</h3>
              <p>{totalChar > 306 ? desc.slice(0, 306).replace(/\s+$/, "") + "..." : desc}</p>
              <Link className="block bg-[#0198FE] text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[36px] max-w-[176px] text-center mt-8" onClick={() => window.scrollTo(0, 0)} to={`/blogDetails`}>
                Read More
              </Link>
            </article>
          ))}
        </div>
        <hr className="my-10" />
        <div className="flex justify-center my-10">
          <button className="mx-1 px-3 py-1 bg-gray-300 text-gray-700 rounded">Previous</button>
          <button className="mx-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">1</button>
          <button className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-sky-600 hover:text-white">2</button>
          <button className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-sky-600 hover:text-white">3</button>
          <button className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-sky-600 hover:text-white">4</button>
          <button className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-sky-600 hover:text-white">5</button>
          <button className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-sky-600 hover:text-white">...</button>
          <button className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-sky-600 hover:text-white">9</button>
          <button className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-sky-600 hover:text-white">Next</button>
        </div>
      </main>
    </div>
  );
};

export default Blog;
