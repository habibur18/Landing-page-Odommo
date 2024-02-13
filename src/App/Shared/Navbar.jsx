import React, { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinkTracker from "../../utils/NavLinkTracker";

export default function Navbar() {
  const [isMediumDevice, setIsMediumDevice] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const ref = createRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumDevice(window.innerWidth < 940);
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
    <nav className="fixed top-0 w-full z-50 bg-[#FFFFFF] shadow-lg">
      <div className="max-w-[1350px] mx-auto  flex justify-between items-center px-1 sm:px-5 md:px-[50px] 2xl:px-0">
        <div className={`${isMediumDevice ? "flex-grow" : ""}`}>
          <img src="https://i.postimg.cc/4yftydKN/nav-logo.png" alt="" />
        </div>
        <div>
          <ul className="uppercase flex items-center gap-5 font-medium">
            {!isMediumDevice && (
              <>
                <li className="py-2">
                  <NavLinkTracker to="/">Home</NavLinkTracker>
                </li>
                <li className="py-2">
                  <NavLinkTracker to="/about-us">About</NavLinkTracker>
                </li>
                <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className={`relative py-2 ${isDropdownOpen ? "z-[9999999]" : ""}`}>
                  <NavLinkTracker to="/services">
                    <span className="pr-1">Services</span>
                    <span className="inline-block">
                      <svg className={`fill-current h-4 w-4 transform ${isDropdownOpen ? "-rotate-180" : ""} transition duration-500 ease-in-out`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </NavLinkTracker>
                  <ul onClick={(e) => e.stopPropagation()} className={`border rounded-lg shadow-[0_5px_15px_0_rgba(63,25,553,0.6)] bg-white  transform transition-opacity duration-500 ease-in-out origin-top min-w-64 text-center overflow-hidden ${isDropdownOpen ? "opacity-100" : "opacity-0"} absolute duration-400 top-10 -left-[80%]`} style={{ visibility: isDropdownOpen ? "visible" : "hidden" }}>
                    <li className=" rounded-sm hover:bg-gray-100 uppercase">
                      <Link onClick={() => window.scrollTo(0, 0)} className=" px-5 py-4 block" to="/services">
                        All Services
                      </Link>
                    </li>
                    <li className=" rounded-sm  hover:bg-gray-100">
                      <Link onClick={() => window.scrollTo(0, 0)} className=" px-5 py-4 block" to="/services/uiux">
                        UI/UX Design
                      </Link>
                    </li>
                    <li className=" rounded-sm hover:bg-gray-100">
                      <Link onClick={() => window.scrollTo(0, 0)} className=" px-5 py-4 block" to="/services/web-design">
                        Web Design
                      </Link>
                    </li>
                    <li className=" rounded-sm  hover:bg-gray-100">
                      <Link onClick={() => window.scrollTo(0, 0)} className=" px-5 py-4 block" to="/services/web-development">
                        WEB DEVELOPMENT
                      </Link>
                    </li>
                    <li className=" rounded-sm  hover:bg-gray-100">
                      <Link onClick={() => window.scrollTo(0, 0)} className=" px-5 py-4 block" to="/services/digital-marketing">
                        DIGITAL MARKETING
                      </Link>
                    </li>
                    <li className=" rounded-sm  hover:bg-gray-100">
                      <Link onClick={() => window.scrollTo(0, 0)} className=" px-5 py-4 block " to="/services/graphics-design">
                        GRAPHICS DESIGN
                      </Link>
                    </li>
                    <li className=" rounded-sm px-5 py-4 hover:bg-gray-100">
                      <Link onClick={() => window.scrollTo(0, 0)} className="px-5 py-5" to="/services/seo">
                        SEO
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="py-2">
                  <NavLinkTracker to="/blog">Blog</NavLinkTracker>
                </li>
                <li className="py-2">
                  <NavLinkTracker to="/contact-us">Contact</NavLinkTracker>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/getstarted" className="group bg-[#0198FE] text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[36px] flex justify-center gap-2 hover:bg-white hover:text-[#0198FE] hover:ring-2 hover:ring-[#0198FE] duration-300 group shadow-lg">
                    get started{" "}
                    <span className="transform  inline-block translate-x-0 group-hover:translate-x-2 duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="stroke-current">
                        <path d="M7.5 17.5L17.5 7.5M17.5 7.5H7.5M17.5 7.5V17.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {isMediumDevice && (
          <Link onClick={() => window.scrollTo(0, 0)} to="/getstarted" className="group bg-[#0198FE] text-white px-2  py-4  sm:px-5 sm:py-4 rounded-md sm:rounded-[36px] flex justify-center gap-2 hover:bg-white hover:text-[#0198FE] hover:ring-2 hover:ring-[#0198FE] duration-300 group mx-3">
            get started{" "}
            <span className="transform hidden sm:block  translate-x-0 group-hover:translate-x-2 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="stroke-current">
                <path d="M7.5 17.5L17.5 7.5M17.5 7.5H7.5M17.5 7.5V17.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        )}
        {isMediumDevice && <i onClick={() => setIsMenuOpen(!isMenuOpen)} className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} mr-3 md:mr-0 text-3xl p-px cursor-pointer `}></i>}
      </div>
      {isMediumDevice && (
        <div className={`transition-opacity ease-in-out duration-300 ${isMenuOpen ? "fixed inset-0 bg-black bg-opacity-50 z-40" : "opacity-0 pointer-events-none"}`}>
          <div ref={ref} className={`fixed inset-y-0 transform transition-transform ease-in-out duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} z-50 bg-gray-900 text-white min-h-screen w-1/2 py-8`}>
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
                <NavLinkTracker to="/about-us">About</NavLinkTracker>
              </li>
              <li>
                <NavLinkTracker to="/services">Services</NavLinkTracker>
              </li>
              <li>
                <NavLinkTracker to="/blog">Blog</NavLinkTracker>
              </li>
              <li>
                <NavLinkTracker to="/contact-us">Contact</NavLinkTracker>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
