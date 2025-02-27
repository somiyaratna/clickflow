import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchDailyTaskData from "../api/fetchDailyTaskData";
import fetchSingleUser from "../api/fetchSingleUser";

function Starting() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [task, setTask] = useState(0);
  const [userData, setUserData] = useState(null);
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

  useEffect(()=>{
    dailyTask();
    if(user?.level === 1){
      setTask(45)
    }
    if(user?.level === 2){
      setTask(50)
    }
    if(user?.level === 3){
      setTask(55)
    }
    if(user?.level === 4){
      setTask(60)
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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-xl md:text-2xl font-semibold text-white">Boost</h1>
          <button
            className="text-sm text-white font-semibold"
            onClick={() => {
              navigate("/records");
            }}
          >
            History →
          </button>
        </header>
        <Link to={"/tasks"}>
          <button className=" md:hidden w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg mb-6">
            Starting
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-darkbg100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video relative mb-2">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="object-cover rounded-t-lg mx-auto"
                />
              </div>
              <h2 className="text-center text-base text-white py-4">
                {category.title}
              </h2>
            </div>
          ))}
        </div>
        <Link to={"/tasks"}>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg mb-6">
            Starting
          </button>
        </Link>


        <div className="text-center text-sm text-white mb-6">{taskData ? `(${taskData.task_count}/${taskData?.total_task})` : `(0/${task})`}</div>

        <div className="space-y-4 text-white">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-sm">Daily Commission</span>
            <span className="text-sm font-medium">USDT {taskData?.today_commission ? taskData?.today_commission : 0}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-sm">Account Balance</span>
            <span className="text-sm font-medium">USDT {userData?.wallet_balance}</span>
          </div>
        </div>

        <div className="mt-8 text-white">
          <h3 className="text-sm font-medium mb-2">Important Notes</h3>
          <ul className="text-sm space-y-2">
            <li>
              • Don&apos;t leave tasks pending it may result in low credit
              score!
            </li>
            <li>• Complete pending task by going to records!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Starting;
