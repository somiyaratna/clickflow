import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow">
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
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
