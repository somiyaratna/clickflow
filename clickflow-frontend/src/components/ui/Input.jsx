import { useState } from "react";

const Input = ({ label, type, id, placeholder, value, onChange, disabled }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-1 md:mb-2 text-left relative">
      <label
        htmlFor={id}
        className="text-sm md:text-base block mb-1 font-normal text-[#14213D]"
      >
        {label}
      </label>
      <input
        type={isPasswordVisible && type === "password" ? "text" : type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full border bg-[#EFF3FB] text-[#14213D] border-bg800 outline-none rounded-lg px-2 py-1 md:px-4 md:py-2 text-base transition-all duration-300 focus:border-primary500 focus:shadow-primary600 placeholder:text-[#14213D] placeholder:text-xs md:placeholder:text-base flex items-center ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      />
      {type === "password" && value && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-8 md:top-9 cursor-pointer"
        >
          {isPasswordVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="gray"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="965d1efae5">
                  <path
                    d="M 0.484375 6.308594 L 29.515625 6.308594 L 29.515625 23 L 0.484375 23 Z M 0.484375 6.308594 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="ad0e07917f">
                  <path
                    d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#965d1efae5)">
                <path
                  fill="#808080"
                  d="M 14.953125 6.378906 C 9.414062 6.378906 4.316406 8.945312 0.96875 13.421875 C 0.449219 14.117188 0.449219 15.09375 0.96875 15.789062 C 4.316406 20.265625 9.414062 22.835938 14.953125 22.835938 C 20.488281 22.835938 25.585938 20.265625 28.933594 15.789062 C 29.457031 15.09375 29.457031 14.121094 28.933594 13.421875 C 25.585938 8.945312 20.488281 6.378906 14.953125 6.378906 Z M 27.410156 14.609375 C 24.425781 18.597656 19.886719 20.886719 14.953125 20.886719 C 10.019531 20.886719 5.476562 18.597656 2.496094 14.601562 C 5.476562 10.613281 10.019531 8.328125 14.953125 8.328125 C 19.886719 8.328125 24.425781 10.613281 27.410156 14.601562 C 27.410156 14.605469 27.410156 14.609375 27.410156 14.609375 Z M 27.410156 14.609375 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
              <path
                fill="#808080"
                d="M 14.953125 8.898438 C 11.859375 8.898438 9.34375 11.460938 9.34375 14.605469 C 9.34375 17.753906 11.859375 20.3125 14.953125 20.3125 C 18.046875 20.3125 20.5625 17.753906 20.5625 14.605469 C 20.5625 11.460938 18.046875 8.898438 14.953125 8.898438 Z M 14.953125 18.363281 C 12.914062 18.363281 11.257812 16.675781 11.257812 14.605469 C 11.257812 12.535156 12.914062 10.847656 14.953125 10.847656 C 16.988281 10.847656 18.644531 12.535156 18.644531 14.605469 C 18.644531 16.675781 16.988281 18.363281 14.953125 18.363281 Z M 14.953125 18.363281 "
                fillOpacity="1"
                fillRule="nonzero"
              />
              <g clipPath="url(#ad0e07917f)">
                <path
                  strokeLinecap="round"
                  transform="matrix(0.513223, -0.513223, 0.513223, 0.513223, 3.239179, 25.613306)"
                  fill="none"
                  strokeLinejoin="miter"
                  d="M 1.000024 0.999977 L 43.539127 0.999977 "
                  stroke="#808080"
                  strokeWidth="2"
                  strokeOpacity="1"
                  strokeMiterlimit="4"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="gray"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="4ab68b473d">
                  <path
                    d="M 0.484375 6.308594 L 29.515625 6.308594 L 29.515625 23 L 0.484375 23 Z M 0.484375 6.308594 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#4ab68b473d)">
                <path
                  fill="#808080"
                  d="M 14.953125 6.378906 C 9.414062 6.378906 4.316406 8.945312 0.96875 13.421875 C 0.449219 14.117188 0.449219 15.09375 0.96875 15.789062 C 4.316406 20.265625 9.414062 22.835938 14.953125 22.835938 C 20.488281 22.835938 25.585938 20.265625 28.933594 15.789062 C 29.457031 15.09375 29.457031 14.121094 28.933594 13.421875 C 25.585938 8.945312 20.488281 6.378906 14.953125 6.378906 Z M 27.410156 14.609375 C 24.425781 18.597656 19.886719 20.886719 14.953125 20.886719 C 10.019531 20.886719 5.476562 18.597656 2.496094 14.601562 C 5.476562 10.613281 10.019531 8.328125 14.953125 8.328125 C 19.886719 8.328125 24.425781 10.613281 27.410156 14.601562 C 27.410156 14.605469 27.410156 14.609375 27.410156 14.609375 Z M 27.410156 14.609375 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
              <path
                fill="#808080"
                d="M 14.953125 8.898438 C 11.859375 8.898438 9.34375 11.460938 9.34375 14.605469 C 9.34375 17.753906 11.859375 20.3125 14.953125 20.3125 C 18.046875 20.3125 20.5625 17.753906 20.5625 14.605469 C 20.5625 11.460938 18.046875 8.898438 14.953125 8.898438 Z M 14.953125 18.363281 C 12.914062 18.363281 11.257812 16.675781 11.257812 14.605469 C 11.257812 12.535156 12.914062 10.847656 14.953125 10.847656 C 16.988281 10.847656 18.644531 12.535156 18.644531 14.605469 C 18.644531 16.675781 16.988281 18.363281 14.953125 18.363281 Z M 14.953125 18.363281 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </svg>
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
