import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import logo7 from "../../assets/logos/logo7.png";
import logo8 from "../../assets/logos/logo8.png";
import logo9 from "../../assets/logos/logo9.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
];

const Logo = () => {
  return (
    <div className="bg-[#925FFF] w-full py-2 overflow-hidden">
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={false}
      loop={0}
    >
      {logos.concat(logos).map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center ml-4"
          style={{
            width: 'clamp(100px, 10vw, 200px)', // Adjust width per logo
          }}
        >
          <img
            src={logo}
            alt={`logo-${index}`}
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </Marquee>
  </div>
  );
};

export default Logo;