import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

SwiperCore.use([Autoplay, Mousewheel]);

const MemberBenefits = () => {
    const navigate = useNavigate();
    const benefits = [
        {
            icon: <svg className="w-[50px] h-[50px]" fill="#8A53F8" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><title>MONEY</title><g><path d="M109,35.959H19a1.751,1.751,0,0,0-1.75,1.75V90.291A1.751,1.751,0,0,0,19,92.041h90a1.751,1.751,0,0,0,1.75-1.75V37.709A1.751,1.751,0,0,0,109,35.959Zm-1.75,52.582H20.75V39.459h86.5Z"></path><path d="M27,75.669a6.552,6.552,0,0,1,6.544,6.544,1.75,1.75,0,0,0,1.75,1.75H92.706a1.75,1.75,0,0,0,1.75-1.75A6.552,6.552,0,0,1,101,75.669a1.75,1.75,0,0,0,1.75-1.75V54.081a1.75,1.75,0,0,0-1.75-1.75,6.552,6.552,0,0,1-6.544-6.544,1.75,1.75,0,0,0-1.75-1.75H35.294a1.75,1.75,0,0,0-1.75,1.75A6.552,6.552,0,0,1,27,52.331a1.75,1.75,0,0,0-1.75,1.75V73.919A1.75,1.75,0,0,0,27,75.669Zm1.75-19.991a10.07,10.07,0,0,0,8.141-8.141H91.109a10.07,10.07,0,0,0,8.141,8.141V72.322a10.07,10.07,0,0,0-8.141,8.141H36.891a10.07,10.07,0,0,0-8.141-8.141Z"></path><path d="M64,76.249A12.249,12.249,0,1,0,51.75,64,12.263,12.263,0,0,0,64,76.249Zm0-21A8.749,8.749,0,1,1,55.25,64,8.758,8.758,0,0,1,64,55.251Z"></path></g></svg>,
            title: "Results Guaranteed",
            description:
                "Get exactly what you pay for. We bring a minimum of 20 quality leads to your front door, and we won't stop until we do.",
        },
        {
            icon: <svg className="w-[50px] h-[50px]" fill="#8A53F8" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><title>STATISTICS</title><path d="M109.128,107.25h-1.87V26.125a1.75,1.75,0,0,0-1.75-1.75H92.316a1.75,1.75,0,0,0-1.75,1.75V107.25H84.154V47.9a1.749,1.749,0,0,0-1.75-1.75H69.212a1.75,1.75,0,0,0-1.75,1.75V107.25H61.051V68.932a1.749,1.749,0,0,0-1.75-1.75H46.109a1.75,1.75,0,0,0-1.75,1.75V107.25H37.948V85.889a1.75,1.75,0,0,0-1.75-1.75H23.006a1.75,1.75,0,0,0-1.75,1.75V107.25H19.128a1.75,1.75,0,1,0,0,3.5h90a1.75,1.75,0,0,0,0-3.5Zm-84.372,0V87.639h9.692V107.25Zm23.1,0V70.682h9.692V107.25Zm23.1,0v-57.6h9.692v57.6Zm23.1,0V27.875h9.692V107.25Z"></path></svg>,
            title: "Fresh Content",
            description:
                "Nothing stale over here. Receive new ads, web designs, and logos every month to keep your audience hooked.",
        },
        {
            icon: <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.047 47.4197L22.347 26.9697C22.0457 25.6525 22.4428 24.273 23.3982 23.3177C24.3537 22.3622 25.7332 21.9652 27.0503 22.2664L47.5003 28.9664C48.2337 29.0769 48.8002 29.6685 48.8785 30.406C48.9568 31.1435 48.5275 31.841 47.8337 32.103L38.2203 36.4764C37.4665 36.8074 36.8645 37.4094 36.5337 38.163L32.167 47.7764C31.9048 48.4702 31.2075 48.8997 30.4698 48.8214C29.7323 48.7429 29.1407 48.1765 29.0303 47.443L29.047 47.4197Z" stroke="url(#paint0_linear_3_5462)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.33984 24.0264C8.03019 24.0264 8.58984 23.4668 8.58984 22.7764C8.58984 22.0861 8.03019 21.5264 7.33984 21.5264V24.0264ZM2.1665 21.5264C1.47615 21.5264 0.916504 22.0861 0.916504 22.7764C0.916504 23.4668 1.47615 24.0264 2.1665 24.0264V21.5264ZM24.1098 2.08643C24.1098 1.39607 23.5502 0.836426 22.8598 0.836426C22.1695 0.836426 21.6098 1.39607 21.6098 2.08643H24.1098ZM21.6098 7.25976C21.6098 7.95011 22.1695 8.50976 22.8598 8.50976C23.5502 8.50976 24.1098 7.95011 24.1098 7.25976H21.6098ZM38.3737 9.03031C38.8618 8.54216 38.8618 7.75069 38.3737 7.26254C37.8855 6.77439 37.0942 6.77439 36.606 7.26254L38.3737 9.03031ZM32.9393 10.9292C32.4512 11.4174 32.4512 12.2088 32.9393 12.697C33.4275 13.1851 34.2188 13.1851 34.707 12.697L32.9393 10.9292ZM12.7671 34.6369C13.2552 34.1488 13.2552 33.3574 12.7671 32.8693C12.2789 32.3811 11.4874 32.3811 10.9993 32.8693L12.7671 34.6369ZM7.33262 36.5359C6.84447 37.0241 6.84447 37.8154 7.33262 38.3036C7.82077 38.7918 8.61224 38.7918 9.10039 38.3036L7.33262 36.5359ZM9.10039 7.27254C8.61224 6.78439 7.82077 6.78439 7.33262 7.27254C6.84447 7.76069 6.84447 8.55216 7.33262 9.04031L9.10039 7.27254ZM10.9993 12.707C11.4874 13.1951 12.2789 13.1951 12.7671 12.707C13.2552 12.2188 13.2552 11.4274 12.7671 10.9392L10.9993 12.707ZM7.33984 21.5264H2.1665V24.0264H7.33984V21.5264ZM21.6098 2.08643V7.25976H24.1098V2.08643H21.6098ZM36.606 7.26254L32.9393 10.9292L34.707 12.697L38.3737 9.03031L36.606 7.26254ZM10.9993 32.8693L7.33262 36.5359L9.10039 38.3036L12.7671 34.6369L10.9993 32.8693ZM7.33262 9.04031L10.9993 12.707L12.7671 10.9392L9.10039 7.27254L7.33262 9.04031Z" fill="url(#paint1_linear_3_5462)"/>
            <defs>
            <linearGradient id="paint0_linear_3_5462" x1="29.4257" y1="4.28232" x2="61.586" y2="17.1887" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5C73F2"/>
            <stop offset="1" stop-color="#F25CDD"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3_5462" x1="11.6838" y1="-21.6147" x2="54.3203" y2="-4.49388" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5C73F2"/>
            <stop offset="1" stop-color="#F25CDD"/>
            </linearGradient>
            </defs>
            </svg>,
            title: "Lightning Fast Delivery",
            description:
                "Your time is valuable. We deliver your stuff just when you need it.",
        },
        {
            icon: <svg className="w-[50px] h-[50px]" fill="#8A53F8" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><title>INFLUENCER</title><g><path d="M33.858,86.919a7.967,7.967,0,1,0-10.785,0,11.222,11.222,0,0,0-5.823,9.828v2.788a1.75,1.75,0,0,0,1.75,1.75H37.93a1.75,1.75,0,0,0,1.75-1.75V96.747A11.223,11.223,0,0,0,33.858,86.919ZM24,81.09a4.466,4.466,0,1,1,4.466,4.442A4.461,4.461,0,0,1,24,81.09ZM36.18,97.785H20.75V96.747a7.715,7.715,0,0,1,15.43,0Z"></path><path d="M104.927,86.919a7.966,7.966,0,1,0-10.785,0,11.223,11.223,0,0,0-5.822,9.828v2.788a1.75,1.75,0,0,0,1.75,1.75H109a1.75,1.75,0,0,0,1.75-1.75V96.747A11.222,11.222,0,0,0,104.927,86.919ZM95.069,81.09a4.466,4.466,0,1,1,4.466,4.442A4.46,4.46,0,0,1,95.069,81.09ZM107.25,97.785H91.82V96.747a7.715,7.715,0,1,1,15.43,0Z"></path><path d="M104.927,40.486a7.966,7.966,0,1,0-10.785,0,11.225,11.225,0,0,0-5.822,9.829V53.1a1.751,1.751,0,0,0,1.75,1.75H109a1.751,1.751,0,0,0,1.75-1.75V50.315A11.224,11.224,0,0,0,104.927,40.486Zm-9.858-5.829A4.466,4.466,0,1,1,99.535,39.1,4.459,4.459,0,0,1,95.069,34.657Zm12.181,16.7H91.82V50.315a7.715,7.715,0,0,1,15.43,0Z"></path><path d="M33.858,40.486a7.967,7.967,0,1,0-10.785,0,11.224,11.224,0,0,0-5.823,9.829V53.1A1.751,1.751,0,0,0,19,54.853H37.93a1.751,1.751,0,0,0,1.75-1.75V50.315A11.225,11.225,0,0,0,33.858,40.486ZM24,34.657A4.466,4.466,0,1,1,28.465,39.1,4.46,4.46,0,0,1,24,34.657Zm12.181,16.7H20.75V50.315a7.715,7.715,0,1,1,15.43,0Z"></path><path d="M30.215,68.365V59.857a1.75,1.75,0,1,0-3.5,0v8.508a1.75,1.75,0,0,0,3.5,0Z"></path><path d="M82.846,91.658H45.372a1.75,1.75,0,0,0,0,3.5H82.846a1.75,1.75,0,0,0,0-3.5Z"></path><path d="M101.285,69V60.494a1.75,1.75,0,0,0-3.5,0V69a1.75,1.75,0,0,0,3.5,0Z"></path><path d="M85,32.907H43a1.75,1.75,0,0,0,0,3.5H85a1.75,1.75,0,0,0,0-3.5Z"></path><path d="M58.993,82.754H61.77a3.985,3.985,0,0,0,3.98-3.981V71.735a15.94,15.94,0,0,1,10.476,4.809,8.059,8.059,0,0,0,.9.809,1.749,1.749,0,0,0,2.823-1.382V47.219a1.749,1.749,0,0,0-2.82-1.385,8.092,8.092,0,0,0-.9.807A15.947,15.947,0,0,1,64.8,51.5H56.159a8.116,8.116,0,0,0-8.107,8.106v3.969a8.112,8.112,0,0,0,6.96,8.016v7.178A3.984,3.984,0,0,0,58.993,82.754Zm3.257-3.981a.481.481,0,0,1-.48.481H58.993a.481.481,0,0,1-.481-.481V71.685H62.25ZM64.367,55H64.8a19.469,19.469,0,0,0,11.647-3.9V72.085a19.474,19.474,0,0,0-11.647-3.9h-.434ZM51.552,63.579V59.61A4.612,4.612,0,0,1,56.159,55h4.707V68.185H56.159A4.612,4.612,0,0,1,51.552,63.579Z"></path></g></svg>,
            title: "Flat Monthly Rate",
            description: "You hate surprises. We do too. Know what your price is from day 1.",
        },
        {
            icon: <svg className="w-[50px] h-[50px]" fill="#8A53F8" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><title>TV</title><path d="M104.684,26.054H23.316a6.073,6.073,0,0,0-6.066,6.067V83.437A6.073,6.073,0,0,0,23.317,89.5H49.6v5.323L36.154,98.508a1.75,1.75,0,0,0,.924,3.376l14.509-3.972H76.412l14.511,3.972a1.75,1.75,0,0,0,.924-3.376L78.4,94.826V89.5h26.287a6.073,6.073,0,0,0,6.066-6.066V32.121A6.073,6.073,0,0,0,104.684,26.054ZM20.75,32.121a2.57,2.57,0,0,1,2.566-2.567h81.368a2.57,2.57,0,0,1,2.566,2.567V77H20.75ZM74.9,94.412H53.1V89.5H74.9ZM107.25,83.437A2.569,2.569,0,0,1,104.684,86H23.317a2.57,2.57,0,0,1-2.567-2.566V80.5h86.5Z"></path></svg>,
            title: "24/7 Access",
            description: "Don’t be left in the dark. Stay connected with us in our Slack Business Chat. We’re just a message away!",
        },
        {
            icon: <svg className="w-[50px] h-[50px]" fill="#8A53F8" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><title>DIGITAL IMAGE</title><g><path d="M98.583,17.25H29.429A11.2,11.2,0,0,0,18.24,28.427V97.581a11.2,11.2,0,0,0,11.189,11.188H98.583A11.2,11.2,0,0,0,109.76,97.581V28.427A11.19,11.19,0,0,0,98.583,17.25Zm-69.154,3.5H98.583a7.686,7.686,0,0,1,7.677,7.677V90.14l-23.677-33.7a8.114,8.114,0,0,0-12.453,0L56.546,75.78l-6.138-8.733a7.492,7.492,0,0,0-6.222-2.92,7.489,7.489,0,0,0-6.219,2.919L21.74,90.13v-61.7A7.692,7.692,0,0,1,29.429,20.75ZM21.74,97.581V96.217l19.091-27.16a4.083,4.083,0,0,1,3.355-1.43,4.083,4.083,0,0,1,3.358,1.432l6.863,9.765L35.831,105.269h-6.4A7.7,7.7,0,0,1,21.74,97.581Zm76.843,7.688H40.11L72.992,58.455a4.1,4.1,0,0,1,3.367-1.424h.008a4.084,4.084,0,0,1,3.351,1.422L106.26,96.228v1.353A7.691,7.691,0,0,1,98.583,105.269Z"></path><path d="M52.051,52.749a13.7,13.7,0,1,0-13.7-13.7A13.714,13.714,0,0,0,52.051,52.749Zm0-23.9a10.2,10.2,0,1,1-10.2,10.2A10.21,10.21,0,0,1,52.051,28.852Z"></path></g></svg>,
            title: "Flexible and Scalable",
            description: "Add or remove services, increase or decrease ad spend as you'd like. Seriously… no commitments.",
        },
    ];

    const scrollingTag = [
        "Supplement Companies", "Chiropractors", "Dentists", "Dermatologists",
        "Counselors", "Construction and Contractors", "Online Personal Trainers",
        "Supplement Companies", "Wellness Coaches", "Gyms and Fitness Centers"
    ];

    return (
        <div className="bg-[#A4C8FF]">
            <div className="max-w-7xl mx-auto py-16 px-4 md:px-16 font-poppins">
                <div className="max-w-6xl flex flex-col items-center mx-auto text-center mb-16">
                    <div className="bg-white text-[28px] md:text-[32px] font-semibold text-[#14213D] w-[98vw] lg:w-[85vw] max-w-6xl h-[198px] px-6 rounded-[40px] flex flex-col md:flex-row items-center justify-around">
                        <h2>Who we work with...</h2>
                        <div className="w-full md:w-[50%] flex items-center justify-center text-center">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={50}
                                loop={true}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                speed={5000}
                                allowTouchMove={true}
                                mousewheel={true}
                            >
                                {[...scrollingTag, ...scrollingTag].map((tag, index) => (
                                    <SwiperSlide key={index}>
                                        <h2 className="text-[#8A53F8] text[32px] lg:text-[48px] leading-none">{tag}</h2>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="text-[28px] md:text-[2.8em] font-bold text-[#14213D] mt-8 flex items-center justify-center">
                    <div className="mr-4">
                        <svg className="w-[40px] lg:w-[50px]" fill="#8A53F8" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                    </div>
                         Member benefits
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-white p-8 md:p-16 rounded-2xl shadow-sm hover:shadow-md transition-all text-[#14213D]">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="font-normal mb-2 leading-tight" style={{ fontSize: 'clamp(26px, 3vw, 32px)' }}>{item.title}</h3>
                            <p className="text-base leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="inline-block bg-[#8A53F8] text-white px-[30px] py-[10px] rounded-[66px] hover:bg-blue-700 transition text-[22px] font-medium" onClick={() => navigate('/contact')}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemberBenefits;