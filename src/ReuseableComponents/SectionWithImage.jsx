import React from "react";

const SectionWithImage = ({ title, description, imageUrl, buttonText, reverse }) => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 mb-6">
      <div className={`flex flex-col   ${!reverse ? "md:flex-row-reverse" : "md:flex-row"} md:items-center gap-5`}>
        <div className={`${!reverse ? "flex-[0.4]" : "flex-[0.6]"} md:mr-6`}>
          <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex-[0.6]">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-gray-700 mb-4 max-w-[70ch]">{description}</p>
          {buttonText && <button className=" py-[16px] px-[65px] box-shadow:0_4px_8px_0_rgba(0,0,0,0.2) rounded-[36px] bg-[#0198FE]  text-white hover:bg-blue-700 transition duration-300 ease-in-out">{buttonText}</button>}
        </div>
      </div>
    </div>
  );
};

export default SectionWithImage;
