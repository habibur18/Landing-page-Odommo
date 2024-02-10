import { motion } from "framer-motion";
import { usePortfolio } from "./Portfolio";

const PortfolioItems = () => {
  const { filteredMovies } = usePortfolio();
  const animations = {
    layout: { type: "spring", duration: 0.5 },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      {filteredMovies.map((movie) => (
        <motion.div initial="initial" animate="animate" exit="exit" transition="transition" layout variants={animations} key={movie.id} className="relative">
          <img className="w-full object-contain h-full" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
          <h2 className="text-white absolute bottom-5 left-5 drop-shadow-2xl backdrop-blur-sm px-2">{movie.original_title}</h2>
        </motion.div>
      ))}
    </>
  );
};

export default PortfolioItems;
