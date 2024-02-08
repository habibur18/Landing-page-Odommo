import React from "react";
import { Link } from "react-router-dom";

export default function SearchDomain() {
  return (
    <section className="my-20 bg">
      <div className="max-w-[1350px] px-10 2xl:px-0 mx-auto bg-[#F5F5F5] py-20 rounded-md">
        <div className="flex flex-col items-center space-y-10">
          <h1 className="text-4xl font-bold">Make more online, for less</h1>
          <div>
            <button className="bg-[#3B82F6] text-white px-5 py-2 rounded-tl-3xl rounded-bl-3xl">Register</button>
            <button className="bg-[#AEACAC] text-white px-5 py-2 rounded-tr-3xl rounded-br-3xl">Transfer</button>
          </div>
          <div className="flex w-full justify-center">
            <input style={{ boxShadow: "0px 4px 4px 0px #DBE9FF" }} className="text-[#B5B3B3] pl-5 sm:pl-10 py-3 focus:placeholder:text-transparent focus:outline-none focus:ring-2 rounded-tl-3xl rounded-bl-3xl lg:w-1/2" type="text" placeholder="Register a domain name to start" />
            <button type="submit" className="bg-[#0198FE] text-white font-semibold px-10 py-3 rounded-tr-3xl rounded-br-3xl">
              Search
            </button>
          </div>
          <div className=" space-x-10 font-medium">
            <Link to="/#">
              <span className="underline uppercase font-bold">.COM</span> $6.78*
            </Link>
            <Link to="/#">
              <span className="underline uppercase font-bold">.NET</span> $12.84*
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
