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
    <Link onClick={handleClick} to={to} className={`${isActive ? "text-[#0198FE]" : "text-[#404040]"} text-lg ${className}`}>
      {children}
    </Link>
  );
};

export default NavLinkTracker;
