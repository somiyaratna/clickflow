import { useEffect, useState } from "react";
import { UserIcon } from "lucide-react";
import { useSelector } from "react-redux";
import star from "./../../assets/lvl-star.png";

function ProfileHeader({user}) {

  return (
    <div className="bg-[#A4C8FF] rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-orange-500" />
          </div>
          <img src={star} className="h-6 absolute left-8 -bottom-2" alt="" />
        </div>
        <div className="flex-1 ml-2">
          <div className="inline-block bg-[#925FFF] text-white text-sm px-4 py-1 rounded-md mt-1">
            {user?.fullName}
          </div>
          <p className="text-sm ml-2 text-[#14213D]">{user?.phoneNo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
