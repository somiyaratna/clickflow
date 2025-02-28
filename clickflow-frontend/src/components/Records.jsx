import Button from "./ui/Button";
import amplifier from "../assets/screen-amplifier.jpg";
import { useEffect, useState } from "react";
import fetchAllTasks from "../api/fetchAlltasks";
import fetchSingleUser from "../api/fetchSingleUser";
import { useSelector } from "react-redux";
import moment from "moment";
import fetchDailyTaskData from "../api/fetchDailyTaskData";

function Records() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const userDetails = useSelector((state) => state.user);
  useEffect(() => {
    setUser(userDetails.user);
  }, [userDetails]);

  const fetchData = async()=>{
    try{
      if(user){
        const task = await fetchAllTasks(user._id);
        setData(task)
      }
    }catch(error){
      console.error(error.message);
    }
  }

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
    fetchData()
    fetchUser()
    dailyTask()
  },[user])

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Records
          </h1>
          <p className="text-white">Yours tasks records will be shown here</p>
        </div>

        <div className="bg-darkbg100 rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">Wallet Balance</h4>
              <p className="text-2xl font-bold text-white">USDT {userData?.wallet_balance}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">
                Today&apos;s Commissions
              </h4>
              <p className="text-2xl font-bold text-white">USDT {taskData?.today_commission ? taskData?.today_commission : 0}</p>
            </div>
          </div>
        </div>

        {data.map((item) => (
          <div key={item._id} className="bg-darkbg100 rounded-xl shadow-sm p-4 md:p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <time className="text-sm text-white">
                {moment(item.createdAt).format('ddd, MMM Do YYYY, h:mm A')}
              </time>
              <span className={`px-3 capitalize py-1 ${item.task_status === 'completed' ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'} rounded-full text-sm font-medium`}>
                {item.task_status}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <img
                  src={item.product_image || amplifier}
                  alt={item.product_title || "Screen Enlarger"}
                  className="object-cover rounded-lg h-16 md:h-20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-medium text-white mb-1">
                  {item.product_title}
                </h3>
                <p className="text-lg text-white font-semibold">${item?.product_price || 0}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-medium text-white mb-1">
                  Commission
                </h3>
                <p className="text-lg text-white font-semibold">${item?.commission || 0}</p>
              </div>
            </div>
          </div>
        ))}

        {/* <Button width={"full"}>Submit</Button> */}
      </div>
    </div>
  );
}

export default Records;
