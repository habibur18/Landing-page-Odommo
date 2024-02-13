import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavLinkTracker = ({ to, children, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };
  return (
    <Link onClick={handleClick} to={to} className={`${isActive ? "text-[#0198FE]" : "text-[#404040]"} text-lg ${className} relative hover:text-[#0198FE] transition-all`}>
      {isActive && <motion.span initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ type: "tween", duration: 0.4 }} layoutId="underline" className="absolute left-0 top-7 h-[2px] bg-[#0198FE] w-full" />}
      {children}
    </Link>
  );
};

export default NavLinkTracker;
