import React from "react";

const PageTitle = ({ title, src }) => {
  return (
    <div>
      <figure className="relative">
        <img className="min-w-[100vw] object-cover max-h-[60vh]  filter brightness-[0.6]" src={src} alt="" />
        <h3 className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl z-30">{title}</h3>
      </figure>
    </div>
  );
};

export default PageTitle;
