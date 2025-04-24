import React from "react";
import quotes from "../../assets/svg/Vector.svg";
import img1 from "../../assets/home/d1.png";

const TestimonialSection = () => {
    return (
        <div className="bg-[#8A53F8] py-12 font-poppins">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center text-white">
                
                <div className="relative w-full md:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <div className="relative flex items-center justify-center">
                        
                        <img
                            src={img1}
                            draggable="false"
                            alt="Nicole Trautman"
                            className="relative z-10 w-auto object-contain"
                        />
                    </div>
                </div>

                <div className="md:w-1/2 text-left flex items-center flex-col">
                    <div className="text-[40px] leading-none mb-6"><img draggable="false" src={quotes} alt="" /></div>
                    <div>
                        <p className="text-white text-[21px] leading-relaxed mb-6">
                            Recently, I had the pleasure of working with Clickflow Marketing on
                            projects for my company. When it comes to professionalism, work
                            ethic, time management, and dedication, this team is exceptional.
                            Each team member brings something unique to the group that
                            separates them from others in this industry.
                        </p>
                        <p className="font-semibold text-white text-[35px]">
                            Nicole Trautman
                        </p>
                        <p className="text-white text-base font-semibold">
                            NOURISH HEALTH AND WELLNESS CEO
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
