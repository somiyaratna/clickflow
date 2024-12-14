import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-grow justify-center items-center flex-col gap-8">
      <h1 className="font-semibold text-9xl text-white mt-12 md:mt-48">
        Oops!
      </h1>
      <h2 className="text-2xl font-semibold text-white">404 Not Found</h2>
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
