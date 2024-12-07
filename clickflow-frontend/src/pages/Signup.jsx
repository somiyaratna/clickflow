import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    withdrawalPassword: "",
    confirmWithdrawalPassword: "",
    loginPassword: "",
    confirmLoginPassword: "",
    inviteCode: "",
    agreeTerms: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div
      className="font-roboto h-screen w-screen flex flex-col items-center justify-center gap-16 bg-cover bg-center"
      style={{ backgroundImage: 'url("./src/assets/Background.png")' }}
    >
      <div>
        <img
          src="./src/assets/logo.png"
          alt="clickflow logo"
          className="max-h-8 md:max-h-12 lg:max-h-16 mt-8"
          draggable="false"
        />
      </div>

      <div
        style={{
          background: "#fff",
          color: "#333",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="p-8 rounded-xl max-w-[280px] w-full text-center mb-16 md:max-w-[600px] lg:max-w-[1200px]"
      >
        <h1 className="text-xl md:text-2xl mb-4 font-bold text-primary800 tracking-normal">
          Create Your Account
        </h1>
        <form
          className="block max-h-[60vh] overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mb-2">
            {/* FULL NAME */}
            <div className="text-left">
              <label
                htmlFor="fullName"
                className="block mb-1 font-bold text-text500"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* USERNAME */}
            <div className="text-left">
              <label
                htmlFor="username"
                className="block mb-1 font-bold text-text500"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="johndoe123"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* EMAIL */}
            <div className="text-left">
              <label
                htmlFor="email"
                className="block mb-1 font-bold text-text500"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* PHONE */}
            <div className="text-left">
              <label
                htmlFor="phone"
                className="block mb-1 font-bold text-text500"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="1234567890"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* LOGIN PASSWORD */}
            <div className="text-left">
              <label
                htmlFor="loginPassword"
                className="block mb-1 font-bold text-text500"
              >
                Login Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="Add Symbols, Numbers, and Letters"
                required
                value={formData.loginPassword}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* CONFIRM LOGIN PASSWORD */}
            <div className="text-left">
              <label
                htmlFor="confirmLoginPassword"
                className="block mb-1 font-bold text-text500"
              >
                Confirm Login Password
              </label>
              <input
                type="password"
                id="confirmLoginPassword"
                name="confirmLoginPassword"
                placeholder="Confirm your login password"
                required
                value={formData.confirmLoginPassword}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* WITHDRAWAL PASSWORD */}
            <div className="text-left">
              <label
                htmlFor="withdrawalPassword"
                className="block mb-1 font-bold text-text500"
              >
                Withdrawal Password
              </label>
              <input
                type="password"
                id="withdrawalPassword"
                name="withdrawalPassword"
                placeholder="Add Symbols, Numbers, and Letters"
                required
                value={formData.withdrawalPassword}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* CONFIRM WITHDRAWAL PASSWORD */}
            <div className="text-left">
              <label
                htmlFor="confirmWithdrawalPassword"
                className="block mb-1 font-bold text-text500"
              >
                Confirm Withdrawal Password
              </label>
              <input
                type="password"
                id="confirmWithdrawalPassword"
                name="confirmWithdrawalPassword"
                placeholder="Confirm your withdrawal password"
                required
                value={formData.confirmWithdrawalPassword}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>

            {/* INVITE CODE */}
            <div className="text-left">
              <label
                htmlFor="inviteCode"
                className="block mb-1 font-bold text-text500"
              >
                Invite Code (Optional)
              </label>
              <input
                type="text"
                id="inviteCode"
                name="inviteCode"
                placeholder="e.g., A0BC8D9F"
                value={formData.inviteCode}
                onChange={handleChange}
                className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* TERMS AND CONDITIONS */}
          <div className="flex items-center my-6">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="agreeTerms" className="text-sm text-text500">
              I have read and agree to the{" "}
              <a href="#" className="text-primary500 hover:text-primary600">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={!formData.agreeTerms}
            className="inline-block mt-2 w-full bg-primary500 text-white p-3 rounded-lg hover:bg-primary600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
          <div className="mt-2">
            <p className="text-sm inline-block me-1">
              Already have an account?
            </p>
            <Link
              to={"/login"}
              className="font-thin text-primary500 hover:text-primary600 text-sm"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
