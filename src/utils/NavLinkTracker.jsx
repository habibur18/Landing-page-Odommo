import { Link, useLocation } from "react-router-dom";

const NavLinkTracker = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`${isActive ? "text-[#0198FE]" : "text-[#404040]"} text-lg `}>
      {children}
    </Link>
  );
};
export default NavLinkTracker;
