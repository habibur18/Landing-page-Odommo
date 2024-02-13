import React from "react";

const BlogDetails = () => {
  return (
    <div className="w-full p-4">
      <div className="space-y-[32px]">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className=" max-w-none">
            <h1 className="text-[#02061A] font-semibold text-[36px]">Introduction:</h1>
            <p className="text-[#202929CC]">In the vast realm of the internet, opportunities to make money abound, and one avenue that often goes overlooked is the world of online article writing. If you have a way with words and a passion for sharing information, there's a lucrative space waiting for you. In this beginner-friendly guide, we'll explore the ins and outs of making money online through article writing. From finding your niche to mastering the art of content creation, let's embark on a journey towards financial freedom.</p>
          </div>
        ))}
        <div className=" max-w-none text-justify pt-[20 px]">
          <h1 className="text-[#02061A] font-semibold text-[36px]">Conclusion:</h1>
          <p className="text-[#202929CC]">In the vast realm of the internet, opportunities to make money abound, and one avenue that often goes overlooked is the world of online article writing. If you have a way with words and a passion for sharing information, there's a lucrative space waiting for you. In this beginner-friendly guide, we'll explore the ins and outs of making money online through article writing. From finding your niche to mastering the art of content creation, let's embark on a journey towards financial freedom.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
