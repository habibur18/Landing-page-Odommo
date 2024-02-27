import React from "react";
import { Link } from "react-router-dom";

export default function RecentBlog() {
  const description = "With overa decade experience,we’ve established ourselves as one of the pioneering agencies in the region With overa decade experience,we’ve established ourselves as one of the pioneering agencies in the region..";
  return (
    <section className="my-20">
      <div className="max-w-[1350px] px-10 lg:px-[100px] 2xl:px-0 mx-auto">
        <h1 className="text-4xl font-bold text-center my-[46px] capitalize">Our recent blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 [&>div]:sm:max-w-[410px]">
          <div className="bg-[#DADBDD7A]/[0.48] flex flex-col">
            <figure>
              <img className="rounded-xl w-full" src="https://i.ibb.co/qNDYskc/1.png" alt="" />
            </figure>
            <div className="px-5">
              <div className="flex justify-between text-sm my-2">
                <p>02 January 2024</p>
                <p>2 COMMENTS</p>
              </div>
              <div className="space-y-4 flex flex-col">
                <Link to="/blog" className="flex-grow text-2xl font-bold">
                  Regional Manager & Limited time management.
                </Link>
                <p className="text-[#707071] text-xl">{description.length > 130 ? description.slice(0, 130) + "..." : description}</p>
              </div>
            </div>
            <Link className="mt-auto p-5 underline underline-offset-4 font-medium" to="/blog">
              Read more
            </Link>
          </div>
          <div className="bg-[#DADBDD7A]/[0.48] flex flex-col">
            <figure>
              <img className="rounded-xl w-full" src="https://i.ibb.co/xHRGVHC/2.png" alt="" />
            </figure>
            <div className="px-5">
              <div className="flex justify-between text-sm my-2">
                <p>02 January 2024</p>
                <p>3 COMMENTS</p>
              </div>
              <div className="space-y-4 flex flex-col">
                <Link to="/blog" className="flex-grow text-2xl font-bold ">
                  Revitalising your people in to a retail downturn.
                </Link>
                <p className="mt-auto text-xl text-[#707071]">{description.length > 130 ? description.slice(0, 130) + "..." : description}</p>
              </div>
            </div>
            <Link className="mt-auto p-5 underline underline-offset-4 font-medium" to="/blog">
              Read more
            </Link>
          </div>
          <div className="bg-[#DADBDD7A]/[0.48] flex flex-col">
            <figure>
              <img className="rounded-xl w-full" src="https://i.ibb.co/xHRGVHC/2.png" alt="" />
            </figure>
            <div className="px-5">
              <div className="flex justify-between text-sm my-2">
                <p>02 January 2024</p>
                <p>3 COMMENTS</p>
              </div>
              <div className="space-y-4 flex flex-col">
                <Link to="/blog" className="flex-grow text-2xl font-bold ">
                  Organisational teams of the are just like families.
                </Link>
                <p className="mt-auto text-xl text-[#707071]">{description.length > 130 ? description.slice(0, 130) + "..." : description}</p>
              </div>
            </div>
            <Link className="mt-auto p-5 underline underline-offset-4 font-medium" to="/blog">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
