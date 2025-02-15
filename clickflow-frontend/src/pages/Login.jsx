import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/userSlice";
import userLogin from "./../api/userLogin";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogin(e) {
    e.preventDefault();
    if (identifier.trim().length === 0 || password.trim().length === 0) {
      toast.error("Username/Email and password are required");
      return;
    }
    setIsSubmitting(true);
    try {
      const loginData = await userLogin(identifier, password); // API call, userLogin is a function inside apiLogin.js
      toast.success("Login successful!");
      dispatch(addUserData(loginData));
      navigate("/");
    } catch (error) {
      toast.error(`Error logging in. ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="font-roboto h-screen w-screen flex flex-col items-center justify-center gap-16 bg-cover bg-center bg-darkbg200"
      style={{ backgroundImage: 'url("./src/assets/Background.png")' }}
    >
      {/* LOGO */}
      <div>
        <img
          src="./src/assets/logo.png"
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
        className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center bg-darkbg200"
      >
        <h1 className="text-xl md:text-2xl mb-4 font-bold text-white tracking-normal">
          Welcome Back
        </h1>
        <form className="block flex-grow" onSubmit={handleLogin}>
          <Input
            label="Email, Phone or Username"
            type="text"
            id="identifier"
            placeholder="Enter your email, phone or username"
            required
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type={"submit"} isLoading={isSubmitting} width={"full"}>
            Login
          </Button>
          <div className="min-w-full mt-2">
            <Link
              to="/forgotPassword"
              className="font-thin text-primary500 text-sm hover:text-primary600"
            >
              Forgot Password?
            </Link>
            <div className="-mt-1">
              <p className="text-sm inline-block me-1">
                Don&apos;t have an account?
              </p>
              <Link
                to={"/signup"}
                className="font-thin text-primary500 hover:text-primary600 text-sm"
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
