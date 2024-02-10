import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="my-10 bg-[#F5F5F5] ">
      <div className="max-w-[1350px] py-[67px] px-10 lg:px-[172px]  md:px-10 2xl:px-0 mx-auto space-y-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Our Best Services</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-[49px]">
          <div className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#fff] p-[25px]">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/85yNXcZ/website-design.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">Website Design</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#fff] p-[25px]">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/WH8bfxT/UI-UX.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">UI UX Design</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#ffffff] p-[25px]">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/89VGWzc/digital-marketing.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">Digital Marketing</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#ffffff] p-[25px]">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/s2Qg2Zs/web-dev.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">Web Development</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
        </div>
        <div className="text-center pt-5">
          <Link onClick={() => window.scrollTo(0, 0)} to="/#" className="group bg-[#0198FE] text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[36px] flex justify-center gap-2 hover:bg-white hover:text-[#0198FE] hover:ring-2 hover:ring-[#0198FE] duration-300 group max-w-[200px] mx-auto">
            More Services
            <span className="transform  inline-block translate-x-0 group-hover:translate-x-2 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="stroke-current">
                <path d="M7.5 17.5L17.5 7.5M17.5 7.5H7.5M17.5 7.5V17.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
