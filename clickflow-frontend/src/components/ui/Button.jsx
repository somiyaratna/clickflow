import Loader from "./Loader/Loader";

const Button = ({ children, type, isLoading, width, disabled, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex justify-center hover:cursor-pointer items-center mt-2 w-${width} bg-primary500 text-white p-3 rounded-lg hover:bg-primary600 transition-all duration-300 ${
        isLoading
          ? "cursor-not-allowed bg-neutral-500 hover:bg-neutral-500"
          : ""
      }`}
    >
      {isLoading ? <Loader height={24} width={24} color="#fff" /> : children}
    </button>
  );
};

export default Button;
