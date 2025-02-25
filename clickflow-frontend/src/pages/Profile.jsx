import Money from "../components/profile/Money";
import Invitation from "../components/profile/Invitation";
import Buttons from "../components/profile/Buttons";
import ProfileHeader from "../components/profile/ProfileHeader";
import BottomMenu from "../components/profile/BottomMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchDailyTaskData from "../api/fetchDailyTaskData";
import fetchSingleUser from "../api/fetchSingleUser";

function Profile() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const userDetails = useSelector((state) => state.user);

  useEffect(() => {
    setUser(userDetails.user);
  }, [userDetails]);



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
    <div className="min-h-full flex-1 pb-4">
      <section className="mx-auto my-8 max-w-[1600px]">
        <h3 className="text-xl md:text-3xl text-white text-center font-bold">
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
