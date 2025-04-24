import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import userSignup from "./../api/userSignup";
import "react-toastify/dist/ReactToastify.css";
import logo from "./../assets/logo.png";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { ChevronLeft } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNo: "",
    loginPassword: "",
    confirmLoginPassword: "",
    withdrawalPassword: "",
    confirmWithdrawalPassword: "",
    inviteCode: "",
    termConditionAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  async function handleSignup(e) {
    e.preventDefault();
    if (formData.loginPassword !== formData.confirmLoginPassword) {
      toast.error("Login passwords do not match");
      return;
    }
    if (formData.withdrawalPassword !== formData.confirmWithdrawalPassword) {
      toast.error("Withdrawal passwords do not match");
      return;
    }
    if (
      formData.loginPassword.length < 8 ||
      formData.withdrawalPassword.length < 8
    ) {
      toast.error("Passwords should consist of at least 8 characters.");
      return;
    }
    if (!/^[a-zA-Z ]+$/.test(formData.fullName)) {
      toast.error("Full Name should only contain letters and spaces.");
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
      toast.error("Username should only contain letters and numbers.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Invalid email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phoneNo)) {
      toast.error("Phone Number should be 10 digits.");
      return;
    }
    if (!formData.termConditionAccepted) {
      toast.error("You must accept the terms and conditions.");
      return;
    }
    if (
      formData.fullName.trim().length === 0 ||
      formData.username.trim().length === 0 ||
      formData.email.trim().length === 0 ||
      formData.phoneNo.trim().length === 0 ||
      formData.loginPassword.trim().length === 0 ||
      formData.confirmLoginPassword.trim().length === 0 ||
      formData.withdrawalPassword.trim().length === 0 ||
      formData.confirmWithdrawalPassword.trim().length === 0
    ) {
      toast.error("All fields are required");
      return;
    }
    setIsSubmitting(true);
    try {
      const signupData = await userSignup({ ...formData });
      console.log(signupData);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="font-roboto min-h-screen w-screen flex flex-col items-center justify-center gap-16 bg-cover bg-center bg-[#925FFF] overflow-y-auto pt-24 md:pt-0"
    >
      {/* LOGO */}
      <div className="cursor-pointer flex justify-center items-center hover:text-gray-200 text-white absolute left-4 top-4" onClick={() => navigate('/')}>
        <ChevronLeft size={32} />Home
      </div>
      <div className="">
        <img
          src={logo}
          alt="clickflow logo"
          className="max-h-12 md:max-h-16 lg:max-h-20"
          draggable="false"
        />
      </div>

      <div
        style={{
          color: "#333",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="p-8 rounded-xl max-w-72 sm:max-w-xl md:max-w-4xl w-full text-center bg-[#A4C8FF]"
      >
        <h1 className="text-xl md:text-2xl mb-2 md:mb-4 font-bold text-white tracking-normal">
          Create an Account
        </h1>
        <form className="block flex-grow" onSubmit={handleSignup}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <Input
              label="Full Name"
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <Input
              label="Username"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              label="Email Address"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              type="text"
              id="phoneNo"
              placeholder="Enter your phone number"
              required
              value={formData.phoneNo}
              onChange={handleChange}
            />
            <Input
              label="Login Password"
              type="password"
              id="loginPassword"
              placeholder="Enter your login password"
              required
              value={formData.loginPassword}
              onChange={handleChange}
            />
            <Input
              label="Confirm Login Password"
              type="password"
              id="confirmLoginPassword"
              placeholder="Confirm your login password"
              required
              value={formData.confirmLoginPassword}
              onChange={handleChange}
            />
            <Input
              label="Withdrawal Password"
              type="password"
              id="withdrawalPassword"
              placeholder="Enter your withdrawal password"
              required
              value={formData.withdrawalPassword}
              onChange={handleChange}
            />
            <Input
              label="Confirm Withdrawal Password"
              type="password"
              id="confirmWithdrawalPassword"
              placeholder="Confirm your withdrawal password"
              required
              value={formData.confirmWithdrawalPassword}
              onChange={handleChange}
            />
            <Input
              label="Invite Code"
              type="text"
              id="inviteCode"
              placeholder="Enter your invite code (optional)"
              value={formData.inviteCode}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className="mb-2 text-center">
            <label
              htmlFor="termConditionAccepted"
              className="block mb-1 font-bold text-text500"
            >
              <input
                type="checkbox"
                id="termConditionAccepted"
                checked={formData.termConditionAccepted}
                onChange={handleChange}
                className="mr-2 text-sm md:text-base"
              />
              I accept the <Link to={'/terms-conditions'} className="text-primary500 hover:text-primary600 cursor-pointer underline">terms and conditions</Link>
            </label>
          </div>
          <Button type={"submit"} isLoading={isSubmitting} width={"full"}>
            Sign Up
          </Button>
          <div className="min-w-full mt-2">
            <p className="text-xs md:text-sm inline-block me-1">
              Already have an account?
            </p>
            <Link
              to={"/login"}
              className="font-thin text-primary500 hover:text-primary600 text-xs md:text-sm"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
