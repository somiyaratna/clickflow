import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ label, type, id, placeholder, required, value, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-1 md:mb-2 text-left relative">
      <label
        htmlFor={id}
        className="text-sm md:text-md block mb-1 font-bold text-text500"
      >
        {label}
      </label>
      <input
        type={isPasswordVisible && type === "password" ? "text" : type}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border border-[#ccc] outline-none rounded-lg px-2 py-1 md:px-4 md:py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-gray-500 placeholder:text-xs md:placeholder:text-sm"
      />
      {type === "password" && value && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-9 cursor-pointer"
        >
          {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
      )}
    </div>
  );
};

export default Input;
