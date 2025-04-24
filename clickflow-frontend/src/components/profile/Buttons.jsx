import React from "react";
import { Wallet, Users, BanknoteIcon, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ActionButton = ({ icon: Icon, label, navigate }) => (
  <Link to={navigate}>
    <div className="flex flex-col items-center gap-3 p-4 bg-[#A4C8FF] rounded-lg shadow transition-all duration-300 hover:shadow-md hover:bg-[#92baf8] cursor-pointer">
      <div className="w-16 h-16 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#925FFF]" />
      </div>
      <span className="text-sm font-medium text-[#14213D]">{label}</span>
    </div>
  </Link>
);

function Buttons({user}) {
  return (
    <div className="bg-[#925FFF] rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg text-white">Invitation Code</span>
        <span className="font-mono text-lg font-bold bg-[#A4C8FF] px-4 py-2 rounded-lg text-[#14213D] uppercase">
          {user?.referralId}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <ActionButton icon={Wallet} label="Recharge" navigate={"/contact"}/>
        <ActionButton icon={Users} label="My Team" navigate={"/invitation"}/>
        <ActionButton icon={BanknoteIcon} label="Withdrawal" navigate="/withdrawal"/>
        <ActionButton icon={UserCircle} label="Profile Details" navigate={"/profile"}/>
      </div>
    </div>
  );
}

export default Buttons;
