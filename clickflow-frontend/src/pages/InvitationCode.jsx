import { useEffect, useState } from "react";
import logo from "../assets/logos/clickflowDark.png";
import Button from "../components/ui/Button";
import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

const InvitationCode = () => {
  const [user, setUser] = useState(null);
  const userDetails = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    setUser(userDetails.user);
  }, [userDetails]);

  useEffect(() => {
    if (!userDetails.token) {
      dispatch(logout());
      navigate("/login");
    }
    setUser(userDetails.user)
  }, []);
  
  function copyToClipboard() {
    navigator.clipboard.writeText(user?.referralId);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      className="bg-[#A4C8FF] rounded relative-lg mx-auto h-full p-16"
    >
      <div className="bg-white text-[#14213D] max-w-[1600px] flex flex-col gap-16 justify-around items-center mx-auto text-center mt-24 h-1/2 rounded-lg p-16 filter backdrop-blur-sm bg-opacity-70 min-h-fit my-4">
        <img
          src={logo}
          alt="logo"
          className="hidden sm:block h-20 md:h-30 mx-auto object-contain"
        />
        <Link to="/dashboard" className="absolute top-6 left-6">
          <ChevronLeft size={32} />
        </Link>
        <h1 className="font-bold text-xl md:text-2xl">
          Your Invitation Code
        </h1>
        <span className="font-bold text-xl md:text-2xl uppercase">
          {user?.referralId}
        </span>
        <Button onClick={copyToClipboard} disabled={isCopied}>
          {isCopied ? "Copied!" : "Copy Invitation Code"}
        </Button>
      </div>
    </div>
  );
};

export default InvitationCode;
