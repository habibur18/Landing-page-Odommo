import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="my-10 bg-[#F5F5F5] py-20">
      <div className="container mx-auto space-y-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Our Best Services</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5 text-center bg-[#ffffff] p-10">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/85yNXcZ/website-design.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">Website Design</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="space-y-5 text-center bg-[#ffffff] p-10">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/WH8bfxT/UI-UX.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">UI UX Design</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="space-y-5 text-center bg-[#ffffff] p-10">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/89VGWzc/digital-marketing.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">Digital Marketing</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="space-y-5 text-center bg-[#ffffff] p-10">
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
          <Link onClick={() => window.scrollTo(0, 0)} to="/#" className="group bg-[#0198FE] text-white px-8 py-4 rounded-[36px]">
            More Services<span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
