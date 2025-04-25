import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import { Toaster, toast } from "react-hot-toast";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withdrawRequest from "../api/withdrawRequest";
import fetchSingleUser from "../api/fetchSingleUser";
import { logout } from "../redux/userSlice";

const Withdrawal = () => {
  const [showNextForm, setShowNextForm] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [withdrawalNetwork, setWithdrawalNetwork] = useState("TRC20");
  const [withdrawalCurrency, setWithdrawalCurrency] = useState("Tether (USDT)");
  const [withdrawalPassword, setWithdrawalPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);
    

  const networkOptions = ["TRC20", "ERC20", "BEP20", "SPL", "ARC20", "MATIC", "ETH", "BTC", "TRX", "USDC", "SOL", "USDT"];
  const currencyOptions = ["Tether (USDT)", "Tron (TRX)", "Solana (SOL)", "USD Coin (USDC)", "Ethereum (ETH)","Bitcoin (BTC)"];

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

  const fetchUser = async () => {
    try {
      if (user) {
        const data = await fetchSingleUser(user?._id);
        setUserData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  const handleNext = () => {
    setShowNextForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (withdrawalAddress === "") {
      toast.error("Please Enter Wallet Address.");
    } else if (withdrawalAmount === "" || withdrawalAmount === 0) {
      toast.error("Please Enter Amount.");
    } else if (withdrawalPassword === "") {
      toast.error("Please Enter Password.");
    } else if (userData.wallet_balance < withdrawalAmount) {
      toast.error(`Please Enter Amount Less Than $${userData.wallet_balance}`);
    } else {
      setIsLoading(true);
      try {
        if (user) {
          const request = await withdrawRequest(
            user._id,
            user.fullName,
            withdrawalAddress,
            withdrawalAmount,
            withdrawalPassword,
            withdrawalNetwork,
            withdrawalCurrency
          );
          if (request.message === "Withdrawal request created successfully") {
            toast.success("Withdrawal request created successfully");
            setShowNextForm(false);
            setWithdrawalAddress("");
            setWithdrawalAmount(0);
            setWithdrawalPassword("");
            setIsLoading(false);
          }
          console.log("request", request);
        }
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
        console.log("Error", error);
      }
    }
  };

  return (
    <div className="bg-[#EFF3FB] h-full pt-24 md:pt-6">
      <div className="flex-1 relative justify-center items-center flex flex-col gap-8 h-full text-[#14213D] pt-24 md:pt-0">
        <Link
          to="/dashboard"
          className="font-semibold absolute top-12 left-0 md:left-8"
        >
          <span className="flex items-center gap-4">
            <ChevronLeft size={32} />
            <p className="text-lg">Back to Dashboard</p>
          </span>
        </Link>
        <h1 className="text-xl md:text-3xl font-bold">
          Binding Wallet Address
        </h1>
        {!showNextForm && (
          <div
            style={{ color: "#333", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
            className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center bg-[#A4C8FF]"
          >
            <div className="flex flex-col gap-4">
              <Input
                type={"text"}
                label={"Wallet Address"}
                value={withdrawalAddress}
                onChange={(e) => setWithdrawalAddress(e.target.value)}
                placeholder={"Enter Wallet Address"}
              />
              <div className="text-left">
                <label className="block mb-1">Select Cryptocurrency</label>
                <select
                  value={withdrawalCurrency}
                  onChange={(e) => setWithdrawalCurrency(e.target.value)}
                  className="w-full p-2 rounded bg-[#EFF3FB] border border-bg800 outline-none"
                >
                  {currencyOptions.map((network) => (
                    <option key={network} value={network}>
                      {network}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-left">
                <label className="block mb-1">Select Network</label>
                <select
                  value={withdrawalNetwork}
                  onChange={(e) => setWithdrawalNetwork(e.target.value)}
                  className="w-full p-2 rounded bg-[#EFF3FB] border border-bg800 outline-none"
                >
                  {networkOptions.map((network) => (
                    <option key={network} value={network}>
                      {network}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="mt-4 bg-[#925FFF] text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        )}
        {showNextForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              color: "#333",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            }}
            className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center bg-[#A4C8FF]"
          >
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
            <Link
              to="/forgot-password"
              className="font-thin hover:underline text-primary500 text-sm hover:text-primary600"
            >
              Forgot Wallet Password?
            </Link>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowNextForm(false)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded ml-4"
              >
                Back
              </button>
              <button
                disabled={isLoading}
                type="submit"
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              >
                {isLoading ? "submiting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
        <ul className="list-disc px-8 -mt-4">
          {/* <li className="text-red-600 text-sm">
            We only support USDT TRC20 network, so make sure to double check your
            TRC20 USDT address.
          </li> */}
          <li className="text-red-600 text-sm">
            If you made an incorrect withdrawal, we are not responsible for making
            changes. Please contact customer service for assistance.
          </li>
        </ul>
        <Toaster />
      </div>
    </div>
  );
};

export default Withdrawal;
