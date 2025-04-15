import React from 'react';

const ClickFlowCTA = () => {
    return (
        <div
            className="w-full bg-cover bg-center py-36 flex justify-center"
            style={{
                backgroundImage: `url('https://clickflow.ca/wp-content/uploads/2024/04/Untitled-design-48.png')`,
            }}
        >
            <div className="max-w-7xl w-full px-2 md:px-4 flex justify-center mt-12">
                <div className="bg-[#fff6f6] rounded-[50px] px-0 md:px-6 py-6 w-full md:w-[80%] flex flex-col items-center justify-center relative text-center">

                    <div className="absolute -top-36">
                        <div className="relative">
                            <img
                                src="https://clickflow.ca/wp-content/uploads/2024/04/Website-Assets-24.png"
                                alt="ClickFlow Logo"
                                className="w-[237px] h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-[20px] md:text-[28px] lg:text-[31px] font-semibold text-[#333333] mt-24">
                        Ready for results? <br /> Contact our team!
                    </h2>

                    <button className="inline-block bg-[#8A53F8] text-white px-[30px] py-[6px] rounded-[66px] hover:bg-blue-700 transition text-[22px] font-medium mt-8">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClickFlowCTA;