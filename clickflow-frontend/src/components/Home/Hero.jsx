import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/home/a1.png'
import img2 from '../../assets/home/a2.png'

const classes = {
    container: "w-full py-20 px-4 bg-[#EFF3FB] text-[#14213D] font-poppins",
    wrapper: "max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative mt-[80px]",
    left: "lg:w-1/2 space-y-6 z-10 mt-10 lg:mt-0 text-center ",
    heading: "text-[58px] md:text-5xl font-semibold leading-tight",
    blueText: "text-[#8A53F8]",
    subheading: "leading-tight font-normal",
    note: "text-[29px] font-normal",
    button: "cursor-pointer inline-block bg-[#8A53F8] text-white px-[30px] py-[10px] rounded-[66px] hover:bg-blue-700 transition text-[22px] font-medium",
    right: "lg:w-1/2 relative",
    image1: "absolute top-20 right-1 z-10 animate-floatY transition-transform w-[370px] h-[267px] sm:w-[728px] sm:h-[525px] md:w-[800px] md:h-[577px] lg:w-[632px] lg:h-[456px]  xl:w-[632px] xl:h-[456px] 2xl:w-[632px] 2xl:h-[456px]",
    image2: "relative z-0 mx-auto w-[350px] h-[350px] sm:w-[708px] sm:h-[708px] md:w-[800px] md:h-[800px] lg:w-[612px] lg:h-[612px] xl:w-[612px] xl:h-[612px] 2xl:w-[612px] 2xl:h-[612px]",
};

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.container}>

            <div className={classes.wrapper}>

                <div className={classes.left}>
                    <h2 className={classes.heading} style={{ fontSize: 'clamp(1.8125rem, 3vw, 3.625rem)' }}>
                        <span className={classes.blueText}>20</span> Quality Leads,<br />
                        <span className={classes.blueText}>Zero</span> Commitments
                    </h2>
                    <h2 className={classes.subheading} style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.8125rem)', lineHeight: 'clamp(1.75rem, 3vw, 2.1875rem)' }}>
                        The first “pay-per-lead” ad agency with guaranteed results
                    </h2>
                    <h2 className={classes.note} style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.8125rem)', lineHeight: 'clamp(1.75rem, 3vw, 2.1875rem)' }}>
                        Pause or Cancel Anytime
                    </h2>
                    <div
                        className={classes.button}
                        onClick={() => navigate('/contact')}
                    >
                        Get Started
                    </div>
                </div>

                <div className={classes.right}>
                    <img
                        draggable="false"
                        src={img1}
                        alt="Decorative Asset 1"
                        className={classes.image1}
                    />
                    <img
                        draggable="false"
                        src={img2}
                        alt="Decorative Asset 2"
                        className={classes.image2}
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;
