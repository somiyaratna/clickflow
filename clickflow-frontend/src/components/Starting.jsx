import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchDailyTaskData from "../api/fetchDailyTaskData";
import fetchSingleUser from "../api/fetchSingleUser";
import ExclusiveDashboard from "./Home/ExclusiveDashboard";
import { logout } from "../redux/userSlice";

function Starting() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [task, setTask] = useState(0);
  const [commission, setCommission] = useState(0);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);
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
  useEffect(()=>{
    dailyTask();
    if(user?.level === 1){
      setTask(45)
      setCommission(0.8)
    }
    if(user?.level === 2){
      setTask(50)
      setCommission(1)
    }
    if(user?.level === 3){
      setTask(55)
      setCommission(1.2)
    }
    if(user?.level === 4){
      setTask(60)
      setCommission(1.4)
    }
  },[user])

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
  },[user])

  return (
    <div className="bg-[#EFF3FB] h-full">
      <div className="max-w-6xl mx-auto">
      <ExclusiveDashboard user={userData} task={taskData} total_task={task} commission={commission}/>
    </div>
    </div>
    
  );
}

export default Starting;
