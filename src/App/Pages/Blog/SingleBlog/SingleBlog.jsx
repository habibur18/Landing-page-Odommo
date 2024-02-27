import React from "react";

import PageTitle from "../../../../ReuseableComponents/PageTitle";
import line from "../../../../assets/Line50.svg";
import PartnerWithUs from "../../Home/PartnerWithUs";
import BlogDetails from "./BlogDetails";
import BlogLeftSide from "./BlogLeftSide";
const SingleBlog = () => {
  return (
    <div className="flex flex-col">
      <PageTitle title=" A Beginner's Guide to Making Money Online Through" src="https://i.postimg.cc/Y9T9bzgX/contactus.png" breadcrumb="Home / Blog / Single Blog" />
      <main className="flex flex-col justify-center">
        <article className="max-w-[1650px] mx-auto px-4 sm:px-10 2xl:px-10">
          <div className=" py-8">
            <figure className="mb-10 relative my-[92px] h-[564px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-full h-full object-cover max-w-full max-h-full rounded-tl-[8rem] rounded-br-[8rem]" src="https://i.ibb.co/hFZN3H9/Ima23ge.png" alt="Blog Featured Image" />
              </div>
            </figure>

            <div className=" flex flex-col md:flex-row gap-5">
              <BlogDetails />
              <img src={line} className="h-full mt-8 w-[1px] hidden md:block" alt="" />
              <BlogLeftSide />
            </div>
            {/* share social media */}
          </div>
          <PartnerWithUs />
        </article>
      </main>
    </div>
  );
};

export default SingleBlog;
