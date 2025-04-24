import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../assets/home/g1.png";
import img2 from "../../assets/home/g2.png";

const ClickFlowCTA = () => {
    const navigate = useNavigate();
    return (
        <div
            className="w-full bg-cover bg-center py-36 flex justify-center"
            style={{
                backgroundImage: `url(${img1})`,
            }}
        >
            <div className="max-w-7xl w-full px-2 md:px-4 flex justify-center mt-12">
                <div className="bg-[#fff6f6] rounded-[50px] px-0 md:px-6 py-6 w-full md:w-[80%] flex flex-col items-center justify-center relative text-center">

                    <div className="absolute -top-36">
                        <div className="relative">
                            <img
                                src={img2}
                                draggable="false"
                                alt="ClickFlow Logo"
                                className="w-[237px] h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-[20px] md:text-[28px] lg:text-[31px] font-semibold text-[#333333] mt-24">
                        Ready for results? <br /> Contact our team!
                    </h2>

                    <button className="inline-block bg-[#8A53F8] text-white px-[30px] py-[6px] rounded-[66px] hover:bg-blue-700 transition text-[22px] font-medium mt-8" onClick={() => navigate('/contact')}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClickFlowCTA;