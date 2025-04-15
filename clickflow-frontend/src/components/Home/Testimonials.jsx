import React from "react";
import { FaStar } from "react-icons/fa";
import ShapoWidget from "./ShapoWidget";

const reviews = [
  {
    name: "Connor Ferguson",
    date: "Jun 5, 2023",
    content:
      "Before using Clickflow, I had to spend countless hours looking through websites and reaching out to potential clients. Now, I have only been working with them for a few weeks and the tide is changing. Clients are...",
  },
  {
    name: "Tyler Muir",
    date: "May 5, 2024",
    content:
      "I recently hired Clickflow to work on three separate SEO projects for my clients. Their professionalism, work ethic, and attention to detail were truly exceptional. Their SEO setup and improvements...",
  },
  {
    name: "Andrew Cha",
    date: "Mar 6, 2024",
    content:
      "Very professional team with strong digital marketing results! I highly recommend working with them!",
  },
  {
    name: "Nicole Trautman",
    date: "Jun 5, 2023",
    content:
      "Recently, I had the pleasure of working with ClickFlow Digital Marketing on projects for my company. When it comes to professionalism, work ethic, time management, and dedication, this team is exceptiona...",
  },
  {
    name: "Travis McNulty",
    date: "Jun 5, 2023",
    content:
      "I have worked with 8 different marketing agencies and I’ve never had anyone pay so much attention to the detail of our industry. They’re transparent, efficient, and exceed the knowledge of everyone else I’ve...",
  },
  {
    name: "Mr Wilson",
    date: "Jun 5, 2023",
    content:
      "Me and my brother co-own a landscaping company and we are currently in our second summer in business. This year we decided to ramp up our marketing by hiring clickflow. They blew our...",
  },
  {
    name: "Manjit Singh",
    date: "",
    content: "",
  },
  {
    name: "M",
    date: "Jun 5, 2023",
    content:
      "I hired Clickflow to oversee the SEO aspect of my Real Estate business and I was blown away with the results. They have a keen eye for de...",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#A4C8FF] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-2xl font-semibold md:mb-8">
          <img
            src="	https://clickflow.ca/wp-content/uploads/2024/06/google-reviews-title-768x284.png"
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
