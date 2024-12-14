import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Phone, ShoppingBag, Book, User, X, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const links = [
  { name: "Home", icon: <Menu size={20} /> },
  { name: "Contact", icon: <Phone size={20} /> },
  { name: "Starting", icon: <ShoppingBag size={20} /> },
  { name: "Records", icon: <Book size={20} /> },
  { name: "Profile", icon: <User size={20} /> },
];

const NavbarLinks = ({ isMobile, onClick }) => (
  <>
    {links.map((link) => (
      <NavLink
        onClick={onClick}
        key={link.name}
        to={link.name === "Home" ? "/" : `/${link.name.toLowerCase()}`}
        className={({ isActive }) =>
          isActive
            ? "text-primary500 md:text-white transition-all duration-200 ease-in-out flex items-center gap-4"
            : "text-primary100 md:text-primary100 md:hover:text-white transition-all duration-200 ease-in-out flex items-center gap-4"
        }
        aria-label={link.name}
      >
        {isMobile && link.icon}
        {link.name}
      </NavLink>
    ))}
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  function userLogout() {
    dispatch(logout());
    navigate("/login");
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // True is passed here to capture the event in the capturing phase and to prevent event bubbling
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <nav className="z-10">
      {/* Desktop view */}
      <div className="hidden md:flex flex-row gap-6 px-8 items-center justify-between">
        <NavbarLinks />
        <button
          onClick={userLogout}
          className="flex items-center gap-2 text-primary600 bg-white hover:bg-primary100 transition-colors duration-300 ease-in-out   hover:text-primary600 px-8 py-2 rounded-lg"
        >
          Sign Out
        </button>
      </div>

      {/* Mobile view */}
      <div className="md:hidden relative px-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl z-20"
          >
            {isMenuOpen ? (
              <X size={26} /> // Show cross when menu is open
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Sliding Navbar */}
        <div
          ref={menuRef}
          className={`fixed top-[60px] bottom-1 rounded-l-xl right-0 w-1/2 sm:w-1/3 bg-darkbg100 p-6 transform transition-transform duration-300 ease-in-out text-primary600 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6  h-full">
            <NavbarLinks isMobile={true} onClick={() => setIsMenuOpen(false)} />

            <button
              onClick={userLogout}
              className="mt-full absolute bottom-10 flex items-center gap-2 text-red-500"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
