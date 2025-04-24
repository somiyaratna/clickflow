import Money from "../components/profile/Money";
import Invitation from "../components/profile/Invitation";
import Buttons from "../components/profile/Buttons";
import ProfileHeader from "../components/profile/ProfileHeader";
import BottomMenu from "../components/profile/BottomMenu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchDailyTaskData from "../api/fetchDailyTaskData";
import fetchSingleUser from "../api/fetchSingleUser";
import { useNavigate } from "react-router-dom";
import {logout} from "../redux/userSlice";

function Profile() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const dailyTask = async()=>{
    try{
      if(user){
        const data = await fetchDailyTaskData(user?._id);
        // console.log(data)
        if(data.message === "success"){
          setTaskData(data.dailyTask);
        }
      }
    }catch(error){
      console.error(error.message);
    }
  }

  const fetchUser = async()=>{
    try{
      if(user){
        const data = await fetchSingleUser(user?._id);
        setUserData(data)
      }
    }catch(error){
      console.error(error.message);
    }
  }
  
  useEffect(()=>{
    fetchUser()
    dailyTask()
  },[user])

  return (
    <div className="min-h-full flex-1 pb-4 bg-[#EFF3FB]">
      <section className="max-w-6xl mx-auto py-8">
        <h3 className="text-xl md:text-3xl text-[#14213D] text-center font-bold">
          Profile
        </h3>
      </section>
      <section className="w-[95%] mx-auto space-y-6">
        <ProfileHeader user={user}/>
        <Money taskData={taskData} userData={userData}/>
        <Invitation user={user}/>
        <Buttons user={user}/>
        <BottomMenu />
      </section>
    </div>
  );
}

export default Profile;
