import React from "react";
import { Link } from "react-router-dom";

const navigationData = [
  {
    category: "Services",
    items: [
      { name: "Branding", path: "/branding" },
      { name: "Marketing", path: "/marketing" },
      { name: "Design", path: "/design" },
      { name: "Advertisement", path: "/advertisement" },
    ],
  },
  {
    category: "Company",
    items: [
      { name: "About us", path: "/about-us" },
      { name: "Contact us", path: "/contact-us" },
      { name: "Careers", path: "/careers" },
      { name: "Press kit", path: "/press-kit" },
    ],
  },
  {
    category: "Legal",
    items: [
      { name: "Terms of use", path: "/terms-of-use" },
      { name: "Privacy policy", path: "/privacy-policy" },
      { name: "Cookie policy", path: "/cookie-policy" },
    ],
  },
];
export default function Footer() {
  return (
    <footer className=" bg-[#010308]">
      <main className="max-w-[1350px] px-10 2xl:px-0 mx-auto">
        <div className="my-10 flex justify-between items-center">
          <figure className="self-start">
            <img src="https://i.postimg.cc/7L7bKfYK/logo.png" alt="odommo xyz logo" />
          </figure>
          <div className="text-[#FFFFFF] text-3xl flex gap-3">
            <Link to="https://www.facebook.com/odommo.xyz">
              <i className="fa-brands fa-facebook-f border w-12 h-12 flex justify-center items-center mx-auto text-center rounded-full"></i>
            </Link>
            <Link to="https://www.instagram.com/odommo.xyz">
              <i className="fa-brands fa-instagram border w-12 h-12 flex justify-center items-center mx-auto text-center rounded-full"></i>
            </Link>
            <Link to="https://twitter.com/OdommoXyz">
              <i className="fa-brands fa-x-twitter border w-12 h-12 flex justify-center items-center mx-auto text-center rounded-full"></i>
            </Link>
          </div>
        </div>
        <div className="bg-[#FFFFFF]/20 w-full h-1"></div>
        <div className="flex justify-between flex-wrap my-10">
          {navigationData.map((categoryObj) => (
            <div key={categoryObj.category} className="my-5">
              <h2 className="text-[#F5F5F5] text-lg font-semibold">{categoryObj.category}</h2>
              <ul className="text-[#A3A3A3]">
                {categoryObj.items.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="my-5">
            <h2 className="text-[#F5F5F5] text-lg font-semibold">NEWSLETTER</h2>
            <input className="bg-[#262626] text-white/60 px-3 py-1 rounded-md focus:placeholder:text-transparent" type="email" name="" id="" placeholder="example@example.com" />
            <br />
            <button className="bg-[#3B82F6] text-[#FFFFFF] px-4 my-2 py-1 rounded-3xl">Submit</button>
          </div>
        </div>
      </main>
      <div className="bg-[#0A1124]">
        <p className="text-[#D4D4D4] max-w-[1350px] px-10 2xl:px-0 mx-auto py-3">© Copyright{new Date().getFullYear()} | Odommo XYZ</p>
      </div>
    </footer>
  );
}
