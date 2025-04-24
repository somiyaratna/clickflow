import React from "react";
import { FaStar } from "react-icons/fa";
import ShapoWidget from "./ShapoWidget";
import img1 from "../../assets/home/f1.png"

const Testimonials = () => {
  return (
    <div className="bg-[#A4C8FF] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-2xl font-semibold md:mb-8">
          <img
            src={img1}
            draggable="false"
            alt="google logo"
            className="w-[30vw] md:w-[15vw] max-w-[283px] h-auto"
          />
        </div>
        <h2 className="text-3xl md:text-[49px] font-semibold mt-4">What do our clients Say?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 relative z-10">
          <ShapoWidget/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
