import React from "react";
// import canadaFlag from "../assets/canada-flag.png";

const CanadianBanner = () => {
    return (
        <div className="bg-[linear-gradient(0deg,_rgba(21,66,66,1)_0%,_rgba(0,0,0,1)_100%)] px-6 md:px-0 py-12 md:py-6 text-white">
            <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row items-center text-xs md:text-sm text-center md:text-left md:gap-12">

                <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0">
                    <img
                        src="https://clickflow.ca/wp-content/uploads/2024/05/Untitled-design-46-e1713650414548.png"
                        alt="Canada Flag"
                        className="w-[300px] h-[68px] mr-2 mb-4 md:mb-0 object-contain"
                    />
                    <div className="font-semibold max-w-[252px] mb-4 md:mb-0 text-[32px] leading-none flex flex-row md:flex-col items-center">
                        <h2>Canadian<span className=" md:hidden">&nbsp;</span></h2>
                        <h2>Owned?</h2>
                    </div>
                </div>

                <p className="text-gray-200 max-w-3xl text-base text-center">
                    Learn how to claim a FREE $2,400 grant towards Clickflow’s Online Marketing
                    through the Canadian Digital Adoption Program (CDAP). Contact our team below
                    to see if you qualify!
                </p>
            </div>
        </div>
    );
};

export default CanadianBanner;
