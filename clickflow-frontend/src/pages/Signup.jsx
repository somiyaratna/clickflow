import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import userSignup from "./../api/userSignup";
import "react-toastify/dist/ReactToastify.css";
import logo from "./../assets/logo.png";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

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
    setIsSubmitting(true);
    try {
      const signupData = await userSignup({ ...formData }); // API call, userSignup is a function inside apiSignup.js
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
      className="font-roboto min-h-screen w-screen flex flex-col items-center justify-center gap-16 bg-cover bg-center overflow-y-auto pt-24 md:pt-0"
      style={{ backgroundImage: 'url("./src/assets/Background.png")' }}
    >
      {/* LOGO */}
      <div>
        <img
          src={logo}
          alt="clickflow logo"
          className="max-h-12 md:max-h-16 lg:max-h-20"
          draggable="false"
        />
      </div>

      <div
        style={{
          background: "#fff",
          color: "#333",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="p-8 rounded-xl max-w-72 sm:max-w-xl md:max-w-4xl w-full text-center"
      >
        <h1 className="text-xl md:text-2xl mb-2 md:mb-4 font-bold text-primary800 tracking-normal">
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
                className="mr-2"
              />
              I accept the terms and conditions
            </label>
          </div>
          <Button
            type={"submit"}
            isLoading={isSubmitting}
            width={"full"}
            disabled={
              !formData.fullName ||
              !formData.username ||
              !formData.email ||
              !formData.phoneNo ||
              !formData.withdrawalPassword ||
              !formData.loginPassword ||
              !formData.termConditionAccepted
            }
          >
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
