import { AnimatePresence } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";
import ButtonFilters from "./ButtonFilters";
import PortfolioItems from "./PortfolioItems";

const PortfolioContext = createContext(null);
export const usePortfolio = () => useContext(PortfolioContext);
const Portfolio = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // ee1aafed03e789a85a2b800eba2360ac
  const getFechPopularMovies = async () => {
    // const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ee1aafed03e789a85a2b800eba2360ac&language=en-US&page=1");
    const response = await fetch("/portfolio.json");
    const data = await response.json();
    setPopularMovies(data.results);
    setFilteredMovies(data.results);
  };
  useEffect(() => {
    getFechPopularMovies();
  }, []);
  // console.log(popularMovies);
  return (
    <PortfolioContext.Provider value={{ popularMovies, filteredMovies, setFilteredMovies }}>
      <div className="max-w-[1650px] px-10 lg:px-[80px] 2xl:px-20 mx-auto pt-[72px] my-20 ">
        <div className=" flex lg:flex-row flex-col items-center gap-10 lg:gap-40 ">
          <h2 className="text-4xl font-bold w-[35%]">
            Explore Our <br /> Recent Works
          </h2>
          <p className="max-w-[60ch]  w-full">We value the experimentation, the reformation of the message, and the smart incentives. We offer a variety of services and solutions Worldwide and this is at the heart of how we approach our.</p>
        </div>
        <ButtonFilters />
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3  gap-10">
          <AnimatePresence>
            <PortfolioItems />
          </AnimatePresence>
        </div>
      </div>
    </PortfolioContext.Provider>
  );
};

export default Portfolio;
