import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShareSocial = ({ postTitle, postUrl }) => {
  return (
    <>
      <div className="w-3/4 mx-auto h-[1px] bg-gray-300 my-10"></div>
      <div className="my-10 flex items-center justify-center">
        <p className="text-gray-700 mr-4">Share this post:</p>
        <div className="flex items-center space-x-4">
          <Link to={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition-colors duration-300">
            <FaFacebook className="w-8 h-8" />
          </Link>
          <Link to={`https://twitter.com/intent/tweet?url=${postUrl}&text=${encodeURIComponent(postTitle)}`} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition-colors duration-300">
            <FaTwitter className="w-8 h-8" />
          </Link>
          <Link to={`https://www.instagram.com`} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition-colors duration-300">
            <FaInstagram className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div className="w-3/4 mx-auto h-[1px] bg-gray-300 my-10"></div>
    </>
  );
};

export default ShareSocial;
