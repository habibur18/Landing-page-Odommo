import React from "react";
import { Link } from "react-router-dom";
import NavLinkTracker from "../../utils/NavLinkTracker";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center p-5">
      <div>
        <img src="https://i.ibb.co/HNtVXrM/nav-logo.png" alt="" />
      </div>
      <div>
        <ul className="uppercase flex gap-5 font-medium">
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
          <li>
            <Link onClick={() => window.scrollTo(0, 0)} to="/getstarted" className="group bg-[#0198FE] text-white px-5 py-4 rounded-[36px]">
              get started <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
