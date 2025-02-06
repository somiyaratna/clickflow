import React from "react";
import { useState } from "react";
import { Bell, Users, DollarSign, Briefcase, Phone } from "lucide-react";
import UserSection from "./UserSection";
import WithdrawRequests from "./WithdrawRequests";
import PremiumTasks from "./PremiumTasks";
import WhatsAppSection from "./WhatsAppSection";
import logo from "../assets/logo.png"

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("users");
  const [notifications, setNotifications] = useState(
    Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      title: `Notification ${index + 1}`,
      date: `2023-10-01 ${Math.floor(index / 2) + 10}:00 ${index % 2 === 0 ? 'AM' : 'PM'}`,
    }))
  );
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.length;

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-40" />
          </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <div className="flex items-center">
            <button onClick={toggleNotifications} className="relative p-2 rounded-full hover:bg-gray-200">
              <Bell className="h-6 w-6 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {unreadCount}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute top-16 right-2 mt-2 w-64 h-[80vh] overflow-y-auto bg-white shadow-lg rounded-lg border border-gray-200 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">Notifications</h3>
                  {notifications.map((notification) => (
                    <div key={notification.id} className="border-b border-gray-200 py-2">
                      <p className="text-sm text-gray-700">{notification.title}</p>
                      <p className="text-xs text-gray-500">{notification.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button
                onClick={() => setActiveSection("users")}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === "users"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <Users className="h-5 w-5 mr-2" />
                Users
              </button>
              <button
                onClick={() => setActiveSection("withdrawRequests")}
                className={`ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === "withdrawRequests"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <DollarSign className="h-5 w-5 mr-2" />
                Withdraw Requests
              </button>
              <button
                onClick={() => setActiveSection("premiumTasks")}
                className={`ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === "premiumTasks"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Premium Tasks
              </button>
              <button
                onClick={() => setActiveSection("whatsapp")}
                className={`ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === "whatsapp"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp
              </button>
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
    </div>
  );
}
