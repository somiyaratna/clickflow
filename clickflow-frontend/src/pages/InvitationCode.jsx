import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "../components/ui/Button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const InvitationCode = ({ invitationCode }) => {
  function copyToClipboard() {
    navigator.clipboard.writeText(invitationCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      style={{ backgroundImage: 'url("./src/assets/Background.png")' }}
      className="bg-darkbg100 rounded relative-lg mx-auto h-full p-16"
    >
      <div className="bg-darkbg200 max-w-[1600px] flex flex-col gap-16 justify-around items-center mx-auto text-center mt-24 h-1/2 rounded-lg p-16 filter backdrop-blur-sm bg-opacity-70 min-h-fit my-4">
        <img
          src={logo}
          alt="logo"
          className="hidden sm:block h-20 md:h-30 mx-auto object-contain"
        />
        <Link to="/dashboard" className="text-white absolute top-6 left-6">
          <ChevronLeft size={32} />
        </Link>
        <h1 className="font-bold text-xl md:text-2xl text-white">
          Your Invitation Code
        </h1>
        <span className="font-bold text-white text-xl md:text-2xl">
          {invitationCode}
        </span>
        <Button onClick={copyToClipboard} disabled={isCopied}>
          {isCopied ? "Copied!" : "Copy Invitation Code"}
        </Button>
      </div>
    </div>
  );
};

export default InvitationCode;
