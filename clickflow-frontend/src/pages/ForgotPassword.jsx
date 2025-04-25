import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import sendOtp from "../api/sendOtp";
import verifyOtp from "../api/verifyOtp";
import logo from "../assets/logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(""); // State for OTP
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOtpVisible, setIsOtpVisible] = useState(false); // State to control OTP visibility
  const [canResendOtp, setCanResendOtp] = useState(false); // State to control resend OTP button
  const [otpTimer, setOtpTimer] = useState(0); // Timer for OTP resend
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setCanResendOtp(true);
    }
    return () => clearInterval(timer);
  }, [otpTimer]);

  async function handleResetPassword(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email address.");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("Passwords should consist of at least 8 characters.");
      return;
    }
    if (email.trim().length === 0 || newPassword.trim().length === 0 || confirmPassword.trim().length === 0) {
      toast.error("All fields are required");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsSubmitting(true);
    try {
      const send = await sendOtp(email);
      if (send.message === "OTP sent to your email successfully") {
        setIsOtpVisible(true);
        setCanResendOtp(false);
        setOtpTimer(300); // 5 minutes in seconds
        toast.success(send.message);
      } else {
        toast.error(send.message);
      }
    } catch (error) {
      toast.error(`Error in Sending Otp`);
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerifyOtp(e) {
    e.preventDefault();

    if (otp.trim().length === 0) {
      toast.error("OTP is required");
      return;
    }

    setIsSubmitting(true);
    try {
      const verify = await verifyOtp(email, newPassword, otp);
      if (verify.message === "Password updated successfully") {
        toast.success("Password reset successful!");
        setTimeout(() => navigate("/login"), 4000);
      } else {
        toast.error(verify.message);
      }
    } catch (error) {
      toast.error(`Error resetting password.`);
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleResendOtp = async () => {
    if (canResendOtp) {
      setCanResendOtp(false);
      setOtpTimer(300); // Reset timer for 5 minutes
      await handleResetPassword(new Event('submit')); // Call the reset password function
    } else {
      toast.error("You can only resend the OTP every 5 minutes.");
    }
  };

  return (
    <div
      className="pt-36 md:pt-0 font-roboto h-screen w-screen flex flex-col items-center justify-center gap-10 bg-cover bg-center bg-[#925FFF]"
    >
      <div>
        <img
          src={logo}
          alt="clickflow logo"
          className="max-h-12 md:max-h-12 lg:max-h-12"
          draggable="false"
        />
      </div>

      <div
        style={{
          color: "#333",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center bg-[#A4C8FF]"
      >
        <h1 className="text-xl md:text-2xl mb-4 font-bold text-white tracking-normal">
          Reset Password
        </h1>
        <form className="block flex-grow" onSubmit={isOtpVisible ? handleVerifyOtp : handleResetPassword}>
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label="New Password"
            type="password"
            id="newPassword"
            placeholder="Enter your new password"
            required
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Confirm your new password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {isOtpVisible && (
            <>
              <Input
                label="Enter OTP"
                type="text"
                id="otp"
                placeholder="Enter the OTP sent to your email"
                required
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
              />
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={!canResendOtp}
                className={`mt-2 text-sm ${canResendOtp ? 'text-primary500' : 'text-gray-500 cursor-not-allowed'}`}
              >
                {canResendOtp ? "Resend OTP" : `Resend OTP in ${Math.floor(otpTimer / 60)}:${otpTimer % 60 < 10 ? '0' : ''}${otpTimer % 60}`}
              </button>
            </>
          )}
          <Button type={"submit"} isLoading={isSubmitting} width={"full"}>
            {isOtpVisible ? "Verify OTP" : "Reset Password"}
          </Button>
          <div className="min-w-full mt-2">
            <div className="-mt-1">
              <p className="text-sm inline-block me-1">
                Remembered your password?
              </p>
              <Link
                to={"/login"}
                className="font-thin text-primary500 hover:text-primary600 text-sm"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
