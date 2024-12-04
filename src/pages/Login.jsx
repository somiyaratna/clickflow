import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      className="font-roboto h-screen w-screen flex flex-col items-center justify-center gap-16 bg-cover bg-center"
      style={{ backgroundImage: 'url("./src/assets/Background.png")' }}
    >
      <div>
        <img
          src="./src/assets/shopify.png"
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
        className="p-8 rounded-xl max-w-72 md:max-w-96 w-full text-center"
      >
        <h1 className="text-xl md:text-2xl mb-4 font-bold text-primary800 tracking-normal">
          Welcome Back
        </h1>
        <form className="block flex-grow" onSubmit={handleSubmit}>
          <div className="mb-2 text-left">
            <label
              htmlFor="email"
              className="block mb-1 font-bold text-text500"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
            />
          </div>
          <div className="mb-2 text-left">
            <label
              htmlFor="password"
              className="block mb-1 font-bold text-text500"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-[#ccc] outline-none rounded-lg px-4 py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="inline-block mt-2 w-full bg-primary500 text-white p-3 rounded-lg hover:bg-primary600 transition-all duration-300"
          >
            Login
          </button>
          <div className="min-w-full mt-2">
            <a
              href="#"
              className="font-thin text-primary500 text-sm hover:text-primary600"
            >
              Forgot Password?
            </a>
            <div className="-mt-1">
              <p className="text-sm inline-block me-1">
                Don&apos;t have an account?
              </p>
              <a
                href="#"
                className="font-thin text-primary500 hover:text-primary600 text-sm"
              >
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
