import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Bell, Users, DollarSign, Briefcase, Phone, Menu, X } from "lucide-react";
import logo from "../assets/logo.png"
import fetchNotifications from "../api/fectchNotification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../redux/userSlice";
import moment from "moment/moment";

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationData, setNotificationData] = useState([]);
  const notificationRef = useRef(null);
  const userDetails = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!userDetails.token) {
      navigate("/login");
    }
  }, [userDetails.token, navigate]);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { name: "Users", icon: Users, section: "users", path: "/" },
    { name: "Withdraw Requests", icon: DollarSign, section: "withdrawRequests", path: "/withdraw-request" },
    { name: "Premium Tasks", icon: Briefcase, section: "premiumTasks", path: "/premium-tasks" },
    { name: "WhatsApp", icon: Phone, section: "whatsapp", path: "/whatsapp" },
  ];

  const notifications = async () => {
    try {
      const data = await fetchNotifications();
      setNotificationData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    notifications();
  }, []);

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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-36 mr-2" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Admin Panel</h1>
          <div className="flex items-center">
            <button
              className="relative p-2 rounded-full hover:bg-gray-200"
              onClick={() => { setIsNotificationOpen(!isNotificationOpen); notifications(); }}
            >
              <Bell className="h-6 w-6 text-gray-600" />
              {notificationData.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {notificationData.length}
                </span>
              )}
            </button>
            <button
              className="ml-2 p-2 rounded-full hover:bg-gray-200 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <button
              className="ml-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
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
                    setIsMobileMenuOpen(false);
                    navigate(item.path);
                  }}
                  className={`inline-flex items-center px-1 py-4 md:py-0 md:pt-1 border-l-4 md:border-l-0 md:border-b-2 text-sm font-medium ${
                    activeSection === item.path ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
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

      {isNotificationOpen && (
        <div ref={notificationRef} className="fixed right-4 top-16 bg-white shadow-lg rounded-lg p-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[80vh] overflow-auto">
          <div className="flex justify-between">
            <h3 className="font-bold underline text-lg">Notifications</h3>
            <X className="text-lg cursor-pointer border-[1px] p-1 rounded-full border-black" onClick={() => setIsNotificationOpen(false)} />
          </div>
          <div className="pl-5 mt-4">
            {notificationData.length === 0 ? (
              <div className="text-sm">No Notifications</div>
            ) : (
              notificationData.map((notification, index) => (
                <div key={index} className="text-sm bg-gray-300 px-4 py-2 rounded-sm">
                  <h2 className="text-base sm:text-lg font-semibold">{notification.title}</h2>
                  {notification.description} <span className="text-gray-500 text-sm">{moment(notification.createdAt).format('MMM Do YYYY, h:mm:ss a')}</span>
                  <hr className="my-2 border-black" />
                </div>
              ))
            )}
          </div>
          <button className="mt-2 text-blue-500 hover:text-blue-700 transition duration-200" onClick={() => setIsNotificationOpen(false)}>Close</button>
        </div>
      )}
    </div>
  )
}