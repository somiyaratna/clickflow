import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTiktok,
    FaGlobe,
} from "react-icons/fa";
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const item = [
        { name: "Homepage", link: "/" },
        { name: "About", link: "/company" },
        { name: "Contact", link: "/contact" },
        { name: "Events", link: "/events" },
    ]
    return (
        <footer className="bg-[#121e3a] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start gap-8">

                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img className="w-[160px]" draggable='false' src={logo} alt="" />
                </div>

                <div className="flex flex-col md:flex-row gap-10 text-sm">
                    <div>
                        <h4 className="font-semibold mb-3">NAVIGATION</h4>
                        <ul className="space-y-2">
                            {item.map((item, i) => (
                                <li key={i} className="cursor-pointer flex items-center gap-2" onClick={() => navigate(item.link)}>
                                    <span>›</span>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* POLICIES */}
                    <div>
                        <h4 className="font-semibold mb-3">POLICIES</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/terms-conditions')}>
                                <span>›</span>
                                <span>Privacy Policy</span>
                            </li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="font-semibold mb-3">SERVICES</h4>
                        <ul className="space-y-2">
                            {["Web Design", "SEO", "Digital Advertising"].map((item) => (
                                <li key={item} className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/contact')}>
                                    <span>›</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA & Social Icons */}
                <div className="flex flex-col items-center mx-auto md:mx-0 md:items-end gap-4">
                    <button className="bg-[#a071ff] text-white px-6 py-2 rounded-full font-medium" onClick={() => navigate('/contact')}>
                        Let's Get Started
                    </button>
                    <div className="flex items-center gap-10 text-xl mt-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        
                        
                        
                        
                    </div>
                </div>
            </div>

            <div className="bg-black text-white text-sm text-center py-4">
                © 2025 Clickflow. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
