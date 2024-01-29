import React, { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinkTracker from "../../utils/NavLinkTracker";

export default function Navbar() {
  const [isMediumDevice, setIsMediumDevice] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = createRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumDevice(window.innerWidth < 898);
      setIsMenuOpen(false);
    };

    handleResize(); // Call it initially to set the correct value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, ref]);

  return (
    <nav>
      <div className="max-w-[1350px] mx-auto flex justify-between items-center p-5">
        <div>
          <img src="https://i.postimg.cc/4yftydKN/nav-logo.png" alt="" />
        </div>
        <div>
          <ul className="uppercase flex gap-5 font-medium">
            {!isMediumDevice && (
              <>
                <li>
                  <NavLinkTracker to="/">Home</NavLinkTracker>
                </li>
                <li>
                  <NavLinkTracker to="/about">About</NavLinkTracker>
                </li>
                <li>
                  <NavLinkTracker to="/services">Services</NavLinkTracker>
                </li>
                <li>
                  <NavLinkTracker to="/blog">Blog</NavLinkTracker>
                </li>
                <li>
                  <NavLinkTracker to="/contact">Contact</NavLinkTracker>
                </li>
              </>
            )}
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="/getstarted" className="group bg-[#0198FE] text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[36px]">
                get started <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
              </Link>
            </li>
          </ul>
        </div>
        {isMediumDevice && <i onClick={() => setIsMenuOpen(!isMenuOpen)} className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-3xl p-px`}></i>}
      </div>
      {isMediumDevice && (
        <div className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 fixed inset-0 bg-black bg-opacity-50 z-50`}>
          <div ref={ref} className={`z-[200] bg-gray-900 text-white min-h-screen w-1/2 py-8`}>
            <div className="flex justify-end px-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-white focus:outline-none">
                <svg className="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="uppercase flex flex-col gap-5 font-medium p-5">
              <li>
                <NavLinkTracker to="/">Home</NavLinkTracker>
              </li>
              <li>
                <NavLinkTracker to="/about">About</NavLinkTracker>
              </li>
              <li>
                <NavLinkTracker to="/services">Services</NavLinkTracker>
              </li>
              <li>
                <NavLinkTracker to="/blog">Blog</NavLinkTracker>
              </li>
              <li>
                <NavLinkTracker to="/contact">Contact</NavLinkTracker>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
