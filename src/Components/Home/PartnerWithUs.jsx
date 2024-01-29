import React from "react";
import { Link } from "react-router-dom";

export default function PartnerWithUs() {
  return (
    <section className="my-32">
      <div className="max-w-[1350px] px-10 2xl:px-0 py-20 mx-auto  bg-[#F5F5F5] rounded-md">
        <div className="space-y-5 flex justify-center flex-col items-center">
          <h1 className="text-4xl font-bold">Partner with us</h1>
          <p className="mb-5 max-w-xl text-center">Looking for a new technology partner and need a request for proposal? We’d love to hear from you! Please get in touch and send your RFP documents.</p>
          <div className="my-10 py-4">
            <Link onClick={() => window.scrollTo(0, 0)} to="#" className="group bg-[#0198FE] text-white px-5 py-4 rounded-[36px]">
              Let's Collaborate<span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
