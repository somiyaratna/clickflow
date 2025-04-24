import Loader from "./Loader/Loader";

const Button = ({ children, type, isLoading, width, disabled, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`flex justify-center  items-center mt-2 w-${width}  text-white p-1 md:p-3 rounded-lg  transition-all duration-300 ${
        disabled || isLoading
          ? "cursor-not-allowed bg-[#925FFF] hover:bg-neutral-500"
          : "hover:cursor-pointer bg-[#925FFF] hover:bg-[#8957f7]"
      }`}
    >
      {isLoading ? <Loader height={24} width={24} color="#fff" /> : children}
    </button>
  );
};

export default Button;
