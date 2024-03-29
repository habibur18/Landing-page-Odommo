import React from "react";
import { Link } from "react-router-dom";

export default function PartnerWithUs() {
  return (
    <section className="">
      <div className="max-w-[1350px] px-10 2xl:px-0 py-20 mx-auto  bg-[#F5F5F5] rounded-md">
        <div className="space-y-5 flex justify-center flex-col items-center">
          <h1 className="text-4xl font-bold">Partner with us</h1>
          <p className="mb-5 max-w-xl text-center">Looking for a new technology partner and need a request for proposal? We’d love to hear from you! Please get in touch and send your RFP documents.</p>
          <div className="my-10 py-4">
            <Link onClick={() => window.scrollTo(0, 0)} to="/contact-us" className="group bg-[#0198FE] text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[36px] flex justify-center gap-2 hover:bg-white hover:text-[#0198FE] hover:ring-2 hover:ring-[#0198FE] duration-300 group shadow-lg">
              Let's Collaborate
              <span className="transform  inline-block translate-x-0 group-hover:translate-x-2 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="stroke-current">
                  <path d="M7.5 17.5L17.5 7.5M17.5 7.5H7.5M17.5 7.5V17.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
