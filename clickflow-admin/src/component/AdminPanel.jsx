import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Bell, Users, DollarSign, Briefcase, Phone, Menu, X } from "lucide-react";
import UserSection from "./UserSection";
import WithdrawRequests from "./WithdrawRequests";
import PremiumTasks from "./PremiumTasks";
import WhatsAppSection from "./WhatsAppSection";
import logo from "../assets/logo.png"

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("users")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const navItems = [
    { name: "Users", icon: Users, section: "users" },
    { name: "Withdraw Requests", icon: DollarSign, section: "withdrawRequests" },
    { name: "Premium Tasks", icon: Briefcase, section: "premiumTasks" },
    { name: "WhatsApp", icon: Phone, section: "whatsapp" },
  ]

  const notifications = Array.from({ length: 200 }, (_, index) => {
    const randomDate = new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30);
    return { message: `Notification ${index + 1}: Sample message`, date: randomDate };
  });

  const formatDate = (date) => {
    return date.toLocaleString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    });
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-36 mr-2" />
          </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Admin Panel</h1>
          <div className="flex items-center">
            <button
              className="p-2 rounded-full hover:bg-gray-200" 
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button
              className="ml-2 p-2 rounded-full hover:bg-gray-200 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`md:flex md:justify-between md:h-16 ${isMobileMenuOpen ? "block" : "hidden md:flex"}`}>
            <div className="flex flex-col md:flex-row gap-3">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    setActiveSection(item.section)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`inline-flex items-center px-1 py-4 md:py-0 md:pt-1 border-l-4 md:border-l-0 md:border-b-2 text-sm font-medium ${
                    activeSection === item.section
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {activeSection === "users" && <UserSection />}
          {activeSection === "withdrawRequests" && <WithdrawRequests />}
          {activeSection === "premiumTasks" && <PremiumTasks />}
          {activeSection === "whatsapp" && <WhatsAppSection />}
        </div>
      </main>

      {isNotificationOpen && (
        <div ref={notificationRef} className="fixed right-4 top-16 bg-white shadow-lg rounded-lg p-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[80vh] overflow-auto">
          <div className="flex justify-between">
            <h3 className="font-bold underline text-lg">Notifications</h3>
            <X className="text-lg cursor-pointer border-[1px] p-1 rounded-full border-black" onClick={() => setIsNotificationOpen(false)}/>
          </div>
          <div className="pl-5 mt-4">
            {notifications.map((notification, index) => (
              <div key={index} className="text-sm">
                {notification.message} <span className="text-gray-500">({formatDate(notification.date)})</span>
                <hr className="my-2" />
              </div>
            ))}
          </div>
          <button className="mt-2 text-blue-500 hover:text-blue-700 transition duration-200" onClick={() => setIsNotificationOpen(false)}>Close</button>
        </div>
      )}
    </div>
  )
}