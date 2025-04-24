import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 justify-center items-center flex flex-col gap-8 h-full bg-[#EFF3FB]">
      <h1 className="font-semibold text-xl md:text-9xl text-[#14213D]">
        Oops!
      </h1>
      <h2 className="text-2xl font-semibold text-[#14213D]">404 Not Found</h2>
      <p>Looks like you lost your way</p>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-primary500 hover:bg-primary600 rounded-lg text-white transition-all duration-200 ease-in-out"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
