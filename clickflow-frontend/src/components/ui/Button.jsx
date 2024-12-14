import Loader from "./Loader/Loader";

const Button = ({ children, type, isLoading, width, disabled, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`flex justify-center  items-center mt-2 w-${width}  text-white p-1 md:p-3 rounded-lg  transition-all duration-300 ${
        disabled || isLoading
          ? "cursor-not-allowed bg-neutral-500 hover:bg-neutral-500"
          : "hover:cursor-pointer bg-primary800 hover:bg-primary600"
      }`}
    >
      {isLoading ? <Loader height={24} width={24} color="#fff" /> : children}
    </button>
  );
};

export default Button;
