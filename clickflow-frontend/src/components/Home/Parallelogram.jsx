import React from "react";

const Parallelogram = () => {
    return (
      <div className="flex gap-[10px] items-center mb-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-[12px] h-5 bg-purple-500 transform -skew-x-[20deg]"
          />
        ))}
      </div>
    );
  };
  
  export default Parallelogram;