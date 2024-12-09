import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import {
  FaHome,
  FaPhone,
  FaUserCircle,
  FaSignOutAlt,
  FaBook,
  FaShoppingBag,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const links = [
  { name: "Home", icon: <FaHome size={20} /> },
  { name: "Contact", icon: <FaPhone size={20} /> },
  { name: "Starting", icon: <FaShoppingBag size={20} /> },
  { name: "Records", icon: <FaBook size={20} /> },
  { name: "Profile", icon: <FaUserCircle size={20} /> },
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
            ? "text-primary900 md:text-primary100 transition-all duration-200 ease-in-out flex items-center gap-4"
            : "text-primary500 md:text-white md:hover:text-primary100 transition-all duration-200 ease-in-out flex items-center gap-4"
        }
        aria-label={link.name}
      >
        {isMobile && link.icon} {/* Show icon only on mobile */}
        {link.name}
      </NavLink>
    ))}
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null); // Reference to the sliding menu

  function userLogout() {
    dispatch(logout());
    navigate("/login");
  }

  // Close the menu when clicking outside of it
  useEffect(() => {
    // Event handler to detect clicks outside the navbar
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("click", handleClickOutside, true);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <nav className="z-10">
      {/* Desktop view */}
      <div className="hidden md:flex flex-row gap-12 px-8">
        <NavbarLinks />
      </div>

      {/* Mobile view */}
      <div className="md:hidden relative px-4">
        {/* Hamburger Icon Inside Navbar */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl z-20"
          >
            {isMenuOpen ? (
              <RxCross1 size={26} /> // Show cross when menu is open
            ) : (
              <RxHamburgerMenu size={26} />
            )}
          </button>
        </div>

        {/* Background Blur when Menu is Open */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Sliding Navbar */}
        <div
          ref={menuRef}
          className={`fixed top-[60px] bottom-1 rounded-l-xl right-0 w-1/2 sm:w-1/3 bg-white p-6 transform transition-transform duration-300 ease-in-out text-primary600 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 h-full">
            <NavbarLinks isMobile={true} onClick={() => setIsMenuOpen(false)} />

            {/* Sign-out button at the bottom */}
            <button
              onClick={userLogout}
              className="mt-full absolute bottom-10 flex items-center gap-2 text-red-500"
            >
              <FaSignOutAlt size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
