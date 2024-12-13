import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "../components/ui/Button";

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
      className="bg-white rounded-lg mx-auto h-full p-16"
    >
      <img src={logo} alt="logo" className="h-20 md:h-30 mx-auto" />
      <div className="bg-white max-w-[1600px] flex flex-col justify-around items-center mx-auto text-center mt-24 h-1/2 rounded-lg p-8 filter backdrop-blur-sm bg-opacity-70">
        <h1 className="font-bold text-xl md:text-2xl text-primary800">
          Your Invitation Code
        </h1>
        <span className="font-bold text-primary800 text-xl md:text-2xl">
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
