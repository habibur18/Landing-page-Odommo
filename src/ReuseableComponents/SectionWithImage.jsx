import React from "react";

const SectionWithImage = ({ title, description, imageUrl, buttonText, reverse }) => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
      <div className={`flex flex-col   ${!reverse ? "md:flex-row-reverse" : "md:flex-row"} md:items-center gap-5 lg:gap-[63px]`}>
        <div className={`flex-[0.4] md:mr-6`}>
          <img src={imageUrl} alt={title} className="w-full max-w-[413px] h-auto rounded-lg" />
        </div>
        <div className="flex-[0.6]">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-[#767676] mb-4 max-w-[60ch] leading-loose">{description}</p>
          {buttonText && <button className=" py-[16px] px-[65px] rounded-[36px] bg-[#0198FE]  text-white hover:bg-blue-700 transition duration-300 ease-in-out">{buttonText}</button>}
        </div>
      </div>
    </div>
  );
};

export default SectionWithImage;