import { Link} from "react-router-dom";
import Input from "../components/ui/Input";
import { Toaster, toast } from "react-hot-toast";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import withdrawRequest from "../api/withdrawRequest";
import fetchSingleUser from "../api/fetchSingleUser";
import fetchDailyTaskData from "../api/fetchDailyTaskData";

const Withdrawal = () => {
  const [showNextForm, setShowNextForm] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [withdrawalNetwork, setWithdrawalNetwork] = useState("TRC 20");
  const [withdrawalPassword, setWithdrawalPassword] = useState("");
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const userDetails = useSelector((state) => state.user);

  useEffect(() => {
    setUser(userDetails.user);
  }, [userDetails]);

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
    fetchUser()
    // dailyTask()
  },[user])

  const handleNext = () => {
    setShowNextForm(true);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(withdrawalAddress === ""){
      toast.error("Please Enter Wallet Address.")
    }
    else if(withdrawalAmount === "" || withdrawalAmount === 0){
      toast.error("Please Enter Amount.")
    }
    else if(withdrawalPassword === ""){
      toast.error("Please Enter Password.")
    }else if(userData.wallet_balance < withdrawalAmount){
      toast.error(`Please Enter Amount Less Than $ ${userData.wallet_balance}`)
    } else {
      try {
        if(user){
          const request = await withdrawRequest(user._id, user.fullName, withdrawalAddress, withdrawalAmount, withdrawalPassword, withdrawalNetwork)
          if(request.message === "Withdrawal request created successfully"){
            toast.success("Withdrawal request created successfully");
            setShowNextForm(false)
            setWithdrawalAddress("");
            setWithdrawalAmount(0);
            setWithdrawalPassword("");
          }
          console.log("request",request)
        }
      } catch (error) {
        toast.error(error.message);
        console.log("lkjbdvshjjnbj",error)
      }
    }
  };

  return (
    <div className="flex-1 relative justify-center items-center flex flex-col gap-8 h-full">
      <Link
        to="/dashboard"
        className="text-white font-semibold absolute top-8 left-8"
      >
        <span className="flex items-center gap-4">
          <ChevronLeft size={32} />
          <p className="text-lg">Back to Dashboard</p>
        </span>
      </Link>
      <h1 className="text-white text-xl md:text-3xl font-bold">
        Binding Wallet Address
      </h1>
      {!showNextForm && (
        <div
          style={{
            color: "#333",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center bg-darkbg200"
        >
          <div className="relative flex flex-col gap-4">
            <Input
              type={"text"}
              label={"Wallet Address"}
              value={withdrawalAddress}
              onChange={(e) => setWithdrawalAddress(e.target.value)}
              placeholder={"Enter Wallet Address"}
            />
            <Input
              type={"option"}
              placeholder={"Network: TRC 20"}
              disabled={true}
            />
            <p className="absolute right-4 bottom-2">TRC 20</p>
          </div>
          <button
            onClick={handleNext}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      )}
      {showNextForm && (
        <form onSubmit={handleSubmit} style={{
          color: "#333",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center bg-darkbg200">
          <Input
            type={"number"}
            label={"Withdrawal Amount"}
            placeholder={"Enter Withdrawal Amount"}
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(e.target.value)}
          />
          <Input
            type={"password"}
            label={"Withdrawal Password"}
            placeholder={"Enter Withdrawal Password"}
            value={withdrawalPassword}
            onChange={(e) => setWithdrawalPassword(e.target.value)}
          />
          
          <div className="flex gap-4 justify-center">
            <button onClick={()=>setShowNextForm(false)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded ml-4">
              Back
            </button>
            <button
              type="submit"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      <ul className="list-disc px-8 mt-10">
        <li className="text-red-600 text-sm">
          We only support USDT TRC20 network, so make sure to double check your
          TRC20 USDT address.
        </li>
        <li className="text-red-600 text-sm">
          If you made an incorrect withdrawal, we are not responsible for making
          changes. Please contact customer service for assistance.
        </li>
      </ul>
      <Toaster/>
    </div>
  );
};

export default Withdrawal;
