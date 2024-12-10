import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/logo.png";
import Navbar from "../Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-primary600 text-white text-center w-full p-4 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={mainLogo}
            alt="main-logo"
            className="h-6 sm:h-8"
            draggable="false"
          />
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
