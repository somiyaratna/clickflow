import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    {
        name: "STROKE AND DOVE",
        bg: "https://clickflow.ca/wp-content/uploads/2024/04/6-3.png",
        bgColor: "bg-[#8a53f8]",
        revenue: "28,000",
        time: "4 Months",
        ad: "4000",
        roas: "700%",
    },
    {
        name: "NOURISH HEALTH AND WELLNESS",
        bg: "https://clickflow.ca/wp-content/uploads/2024/04/3-1.png",
        bgColor: "bg-[#4054b2]",
        revenue: "64,000",
        time: "1 Month",
        ad: "1200",
        roas: "5,333%",
    },
    {
        name: "NEEVA SNACKS",
        bg: "https://clickflow.ca/wp-content/uploads/2024/04/4-3.png",
        bgColor: "bg-[#4c1a4b]",
        revenue: "60,000",
        time: "11 Months",
        ad: "15,000",
        roas: "400%",
    },
    {
        name: "22 FRESH",
        bg: "https://clickflow.ca/wp-content/uploads/2024/04/5-3.png",
        bgColor: "bg-[#8a53f8]",
        revenue: "313,000",
        time: "11 Months",
        ad: "37,500",
        roas: "834%",
    },
];

const RecentProjects = () => {
    const scrollRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    const scroll = (offset) => {
        const el = scrollRef.current;

        if (!el) return;

        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        // Right scroll
        if (offset > 0) {
            if (el.scrollLeft + 10 >= maxScrollLeft) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: offset, behavior: "smooth" });
            }
        }

        // Left scroll
        if (offset < 0) {
            if (el.scrollLeft <= 0) {
                el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            } else {
                el.scrollBy({ left: offset, behavior: "smooth" });
            }
        }
    };

    const handleMouseDown = (e) => {
        isDown = true;
        scrollRef.current.classList.add("cursor-grabbing");
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
        scrollRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
        isDown = false;
        scrollRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="bg-[#121e3a] text-white py-16 font-poppins">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    Don&apos;t just take our word for it,
                    <br />
                    check out our recent projects.
                </h2>

                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        className="flex xl:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent p-2 rounded-full"
                        onClick={() => scroll(-300)}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        className="flex xl:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent p-2 rounded-full"
                        onClick={() => scroll(300)}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-4 scroll-smooth cursor-grab"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="relative group bg-cover bg-center w-64 h-[300px] rounded-3xl overflow-hidden flex-shrink-0"
                                style={{ backgroundImage: `url(${project.bg})` }}
                            >
                                <div
                                    className={`absolute inset-0 ${project.bgColor} text-white flex flex-col items-center justify-center text-center p-4 gap-2 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 z-20`}
                                >
                                    <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                                    <p className="font-semibold">Meta Ads | E-com</p>
                                    <p>Revenue Generated: <span className="font-semibold">${project.revenue}</span></p>
                                    <p>Time Frame: <span className="font-semibold">{project.time}</span></p>
                                    <p>Ad Spend: <span className="font-semibold">${project.ad}</span></p>
                                    <p>ROAS: <span className="font-semibold">{project.roas}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="bg-[#a071ff] text-white font-medium px-6 py-2 rounded-full mt-6">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default RecentProjects;
