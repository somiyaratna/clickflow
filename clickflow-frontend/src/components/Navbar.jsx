import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Phone, ShoppingBag, Book, User, X, LogOut, House } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const links = [
  { name: "Home", icon: <House size={20} /> },
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
            : "text-black text-sm sm:text-base md:text-primary100 md:hover:text-white transition-all duration-200 ease-in-out flex items-center gap-4"
        }
        aria-label={link.name}
      >
        {/* {isMobile && link.icon} */}
        {link.name}
      </NavLink>
    ))}
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [logged, setLogged] = useState(false);
  const userDetails = useSelector((state) => state.user);

  function userLogout() {
    dispatch(logout());
    navigate("/login");
  }

  useEffect(() => {
    if (!userDetails.token) {
      setLogged(false);
    }else{
      setLogged(true);
    }
  }, []);



  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   // True is passed here to capture the event in the capturing phase and to prevent event bubbling
  //   document.addEventListener("click", handleClickOutside, true);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);

  return (
    <nav className="z-10">
      {/* Desktop view */}
      <div className="hidden md:flex flex-row gap-6 px-8 items-center justify-between">
        <NavbarLinks />
        <button
          onClick={userLogout}
          className="flex items-center gap-2 text-primary600 bg-white hover:bg-primary100 transition-colors duration-300 ease-in-out   hover:text-primary600 px-6 py-2 rounded-lg"
        >
          {logged ? 'Sign Out' : 'Log In'}
        </button>
      </div>
      <button
          onClick={userLogout}
          className="flex md:hidden items-center gap-2 text-primary600 bg-white hover:bg-primary100 transition-colors duration-300 ease-in-out   hover:text-primary600 px-8 py-2 rounded-lg"
        >
          {logged ? 'Sign Out' : 'Log In'}
        </button>
      {/* Mobile view */}
      <div className="md:hidden relative px-4">
        {/* <div className="flex justify-between items-center">
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
        </div> */}

        {/* <div
          className={`fixed inset-0 bg-black bg-opacity-0 transition-opacity duration-300`}
        ></div> */}

        {/* Sliding Navbar */}
        
      </div>
    </nav>
  );
};

export default Navbar;
