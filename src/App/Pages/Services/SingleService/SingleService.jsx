import React from "react";
import PageTitle from "../../../../ReuseableComponents/PageTitle";
import line from "../../../../assets/Line50.svg";
import PartnerWithUs from "../../Home/PartnerWithUs";
import ServiceDetailsMain from "./ServiceDetailsMain";
import SingleServiceLeft from "./SingleServiceLeft";

const SingleService = () => {
  return (
    <div className="flex flex-col">
      <PageTitle title="UI/UX Design" src="https://i.postimg.cc/Y9T9bzgX/contactus.png" breadcrumb="Home / Services / Single Service" />
      <main className="flex flex-col justify-center">
        <article className="max-w-[1650px] mx-auto px-4 sm:px-10 2xl:px-10">
          <div className=" py-8">
            <figure className="mb-10 relative my-[92px] h-[564px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-full h-full max-w-full max-h-full rounded-tl-[8rem] rounded-br-[8rem]" src="https://i.ibb.co/hFZN3H9/Ima23ge.png" alt="Blog Featured Image" />
              </div>
            </figure>

            <div className=" flex flex-col md:flex-row gap-5">
              <ServiceDetailsMain />
              <img src={line} className="h-full mt-8 w-[2px] hidden md:block" alt="" />
              <SingleServiceLeft />
            </div>
            {/* share social media */}
          </div>
          <PartnerWithUs />
        </article>
      </main>
    </div>
  );
};

export default SingleService;
