import React, { useState } from "react";
import { usePortfolio } from "./Portfolio";

const ButtonFilters = () => {
  const [tabActive, setTabActive] = useState(0);
  const { popularMovies, setFilteredMovies } = usePortfolio();
  const genres = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
  ];
  const handleFilter = (id) => {
    setTabActive(id);
    const filteredMovies = popularMovies.filter((movie) => movie.genre_ids.includes(id));
    if (id === 0) {
      setFilteredMovies(popularMovies);
    } else {
      setFilteredMovies(filteredMovies);
    }
  };
  return (
    <div className="text-center my-10">
      {genres.map((genre) => (
        <button key={genre.id} className={` ${tabActive === genre.id ? "bg-[#3B82F6] text-white" : "bg-gray-300"} font-semibold px-5 py-3 rounded-full mx-2 my-3`} onClick={() => handleFilter(genre.id)}>
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilters;
