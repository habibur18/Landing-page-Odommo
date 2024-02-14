import React from "react";

const PageTitle = ({ title, src, breadcrumb, uppercase }) => {
  return (
    <div>
      <figure className="relative">
        <img className="min-w-[100vw] h-[572px]  filter brightness-[0.6]" src={src} alt="" />
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-full text-center">
          <h3 className={`text-[#FFFFFF] font-semibold text-3xl md:text-[40px] w-full ${uppercase ? "uppercase" : "capitalize"}`}>{title}</h3>
          {breadcrumb && <p className="text-center mt-2 text-[18px] text-[#FFFFFF]">{breadcrumb}</p>}
        </div>
      </figure>
    </div>
  );
};

export default PageTitle;
