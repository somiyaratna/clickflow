import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import sendOtp from '../api/sendOtp';
import verifyOtp from '../api/verifyOtp';

function ForgetPassword() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isOtp, setIsOtp] = useState(false);
    const [error, setError] = useState('');
    const [otp, setOtp] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleRegisterSubmit = async(e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error("Please fill in all fields");
            setError('Please fill in all fields');
            return;
        }
        setLoading(true); 
        try {
            const register = await sendOtp(username, password);
            toast.success("Registration successful! Please verify your OTP.");
            setIsOtp(true);
        } catch (error) {
            toast.error("Error in Sending OTP.");
            console.log(error.message);
        } finally {
            setLoading(false); 
        }
    };

    const handleOtpSubmit = async(e) => {
        e.preventDefault();
        setLoading(true); 
        try {
            const verify = await verifyOtp(username, otp);
            toast.success("OTP verified! You can now log in.")
            setPassword('');
            setUsername('');
            setOtp('');
            setTimeout(() => {
                setIsOtp(false);
                navigate("/login");
            }, 4000);
        } catch (error) {
            setError('Invalid OTP. Please try again.');
            toast.error("Invalid OTP. Please try again.");
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            {!isOtp && (
                <form onSubmit={handleRegisterSubmit} className="bg-white p-6 rounded shadow-md w-80">
                    <h2 className="text-2xl mb-4 text-center">Password Reset</h2>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="border rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border rounded-md p-2 w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)} 
                                className="absolute right-2 top-2 text-gray-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className={`w-full ${loading ? "bg-gray-400" : "bg-blue-500"} text-white p-2 rounded-md hover:bg-blue-600`}>
                        {loading ? "Sending..." : "Send Otp"}
                    </button>
                    <button type="button" onClick={() => navigate("/login")} className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-2">Login</button>
                </form>
            )}
            {isOtp && (
                <form onSubmit={handleOtpSubmit} className="bg-white p-6 rounded shadow-md w-80 mt-4">
                    <h2 className="text-2xl mb-4 text-center">Verify OTP</h2>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="otp">OTP</label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="border rounded-md p-2 w-full"
                        />
                    </div>
                    <button type="submit" disabled={loading} className={`w-full ${loading ? "bg-gray-400" : "bg-blue-500"} text-white p-2 rounded-md hover:bg-blue-600`}>
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                    <button type="button" onClick={() => setIsOtp(false)} className="w-full p-2 rounded-md border-2 text-black mt-2 hover:bg-slate-300">Back</button>
                </form>
            )}
            <ToastContainer />
        </div>
    )
}

export default ForgetPassword;