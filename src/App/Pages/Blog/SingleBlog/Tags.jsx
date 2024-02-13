import React from "react";

const Tags = ({ tags }) => {
  return (
    <div>
      <h5 className="text-lg font-bold">Post related Tags</h5>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-sm text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
