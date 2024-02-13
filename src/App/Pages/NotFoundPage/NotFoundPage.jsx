import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
