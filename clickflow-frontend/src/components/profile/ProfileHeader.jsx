import React, { useEffect, useState } from 'react'
import { Star, UserIcon } from 'lucide-react'
import { useSelector } from 'react-redux';

function ProfileHeader() {
    const [user, setUser] = useState(null);
    const userDetails = useSelector((state) => state.user);
    console.log(userDetails);
    useEffect(() => {
        setUser(userDetails.user)
      }, [userDetails])
      console.log(user)
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-orange-500" />
          </div>
          <Star className="w-4 h-4 text-yellow-400 absolute -right-1 -bottom-1" />
        </div>
        <div className="flex-1">
          <p className="text-lg font-medium">{user?.phoneNo}</p>
          <div className="inline-block bg-gray-900 text-white text-sm px-4 py-1 rounded-md mt-1">
            {user?.fullName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader