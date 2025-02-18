import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Section from "../components/ui/Section";
import { logos, mvpLevels, services } from "./../../constants";
import fetchSingleUser from "../api/fetchSingleUser";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const userDetails = useSelector((state) => state.user);
  const navigate = useNavigate();


  useEffect(() => {
    if (!userDetails.token) {
      navigate("/login");
    }
    setUser(userDetails.user)
  }, [navigate, userDetails.token]);

  const fetchUser = async()=>{
    try{
      if(user){
        const data = await fetchSingleUser(user?._id);
        setUserData(data)
      }
    }catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchUser();
  },[user])

  return (
    <div className="min-h-full flex-1">
      <h1 className="text-2xl md:text-4xl font-bold text-white p-8">
        Welcome, {userDetails.user.fullName}
      </h1>

      {/* SERVICES */}
      <Section heading={"Our Services"} data={services} variant={"services"} />

      {/* MVP LEVELS */}
      <Section heading={"MVP Levels"} data={mvpLevels} variant={"mvplevels"} user={userData}/>

      {/* PARTNERS */}
      <Section heading={"Our Partners"} data={logos} variant={"partners"} />
    </div>
  );
};

export default Dashboard;
